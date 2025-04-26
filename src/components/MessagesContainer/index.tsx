import { ToastContainer, Bounce } from "react-toastify"

type MessagesContainerProps = {
  children: React.ReactNode,
}

export default function MessagesContainer({
  children
}: MessagesContainerProps) {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {children}

    </>
  )
}