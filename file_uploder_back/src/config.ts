import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('file', 'root', 'letmein', {
  host: 'localhost',
  port: 3307, // Specify the port here
  dialect: 'mysql',
  username: 'root',
  password: 'letmein'
});

// Test the database connection
async function testDatabaseConnection() {
  try {
    // Authenticate with the database
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Call the function to test the database connection
testDatabaseConnection();

export { sequelize };
