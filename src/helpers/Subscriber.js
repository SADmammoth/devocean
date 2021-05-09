import sailsIoClient from 'sails.io.js-dist';
import socketIoClient from 'socket.io-client';

const io = sailsIoClient(socketIoClient);
io.sails.url = process.env.SUBSCRIPTION_SERVER || SUBSCRIPTION_SERVER;

const Subscriber = {
  notifications: (onUpdate) => {
    if (!io.socket.eventQueue.notifications) {
      io.socket.get('/notifications/subscribe', '', (res, jwres) => {
        console.log('Subscriber: ' + res.message);
      });

      io.socket.on('notifications', async (res) => {
        console.log('Subscriber: ' + res.message);
        await onUpdate();
      });
    }
  },
};

export default Subscriber;
