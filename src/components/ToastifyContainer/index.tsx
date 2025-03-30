import { Bounce, ToastContainer } from 'react-toastify';

type ToastifyContainerProps = {
  children: React.ReactNode;
};

export const ToastifyContainer = ({ children }: ToastifyContainerProps) => {
  return (
    <>
      {children}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
};
