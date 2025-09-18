import mongoose from 'mongoose';
import config from './config';

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    
    console.log(`MongoDB conectado: ${conn.connection.host}`);
    
    // Configuraciones adicionales para Mongoose
    mongoose.set('strictQuery', false);
    
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    process.exit(1);
  }
};

// Manejo de eventos de conexión
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB desconectado');
});

mongoose.connection.on('error', (error) => {
  console.error('Error en la conexión de MongoDB:', error);
});

export default connectDB;