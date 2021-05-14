import ReactDOM from 'react-dom';

import PopupWindow from '../../components/generic/PopupWindow';

export default function showPopup(props) {
  const root = document.getElementById('popups');
  const popup = document.createElement('div');
  let resolvePromise;

  root.appendChild(popup);

  ReactDOM.render(
    <PopupWindow
      {...props}
      onClose={(data) => {
        root.removeChild(popup);
        resolvePromise(data);
      }}
    />,
    popup,
  );

  return new Promise((resolve) => {
    resolvePromise = (state) => resolve(state);
  });
}
