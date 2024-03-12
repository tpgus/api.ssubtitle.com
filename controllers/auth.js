exports.login = async (req, res) => {
  const { email, password } = req.body;

  const result = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  const hashed = result[0][0].password;

  bcrypt.compare(password, hashed, (err, isMatch) => {
    if (err) {
      throw err;
    }
    if (isMatch) {
      const user = result[0][0];

      const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: '24h' });
      res.status(200).send({ success: true, data: { token } });
    } else {
      res.status(200).send({ success: false, data: null });
    }
  });
};
