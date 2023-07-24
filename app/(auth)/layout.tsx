const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex items-center h-[100vh] justify-center ">{children}</div>
  );
};

export default AuthLayout;
