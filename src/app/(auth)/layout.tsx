const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-self-center">
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </main>
  );
};
export default AuthLayout;
