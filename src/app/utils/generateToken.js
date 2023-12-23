import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  try {
    if (!userId) {
      throw new Error('Missing userId');
    }
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
  } catch (error) {
    // Handle JWT signing errors here
    console.error('Error generating token:', error);
    // Respond with an error message or handle it as needed
  }
};

export default generateToken;
