    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcrypt');
    const User = require('../../models/User');

    const loginUser = async (req, res) => {
        try {
            const { username, password } = req.body;

            // if user exists
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // checking password
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // creating access token
            const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        
            res.json({ accessToken });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    };

    module.exports = { loginUser };
