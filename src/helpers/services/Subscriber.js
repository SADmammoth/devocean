import sailsIoClient from 'sails.io.js-dist';
import socketIoClient from 'socket.io-client';

const io = sailsIoClient(socketIoClient);
io.sails.url = process.env.SUBSCRIPTION_SERVER || SUBSCRIPTION_SERVER;

const subscribeToEndpoint = (endpoint) => {
  return (onUpdate) => {
    if (!io.socket.eventQueue[endpoint]) {
      io.socket.get(`/${endpoint}/subscribe`, '', (res, jwres) => {
        console.log('Subscriber: ' + res.message);
      });

      io.socket.on(endpoint, async (res) => {
        console.log('Subscriber: ' + res.message);
        await onUpdate();
      });
    }
  };
};

const Subscriber = {
  notifications: subscribeToEndpoint('notifications'),
  tasks: subscribeToEndpoint('tasks'),
  teammates: subscribeToEndpoint('teammates'),
  taskcollections: subscribeToEndpoint('taskcollections'),
  discussions: subscribeToEndpoint('discussions'),
  reports: subscribeToEndpoint('reports'),
  history: subscribeToEndpoint('history'),
  statuses: subscribeToEndpoint('statuses'),
};

export default Subscriber;
