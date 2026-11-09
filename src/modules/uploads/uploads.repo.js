import { all, get, run } from '#db';

export const listByUser = (userId) =>
  all(
    `SELECT u.id, u.user_id, u.original_name, u.mime, u.size, u.created_at, usr.name AS owner_name
     FROM uploads u JOIN users usr ON usr.id = u.user_id
     WHERE u.user_id = ? ORDER BY u.id DESC`,
    [userId],
  );

/** Dành cho admin: mọi file của mọi người. */
export const listAll = () =>
  all(
    `SELECT u.id, u.user_id, u.original_name, u.mime, u.size, u.created_at, usr.name AS owner_name
     FROM uploads u JOIN users usr ON usr.id = u.user_id
     ORDER BY u.id DESC LIMIT 500`,
  );

export const findById = (id) => get('SELECT * FROM uploads WHERE id = ?', [id]);

export const countByUser = async (userId) =>
  (await get('SELECT COUNT(*) AS n FROM uploads WHERE user_id = ?', [userId])).n;

export const insert = ({ userId, storedName, originalName, mime, size }) =>
  run('INSERT INTO uploads (user_id, stored_name, original_name, mime, size) VALUES (?, ?, ?, ?, ?)', [
    userId,
    storedName,
    originalName,
    mime,
    size,
  ]);

export const remove = (id) => run('DELETE FROM uploads WHERE id = ?', [id]);
