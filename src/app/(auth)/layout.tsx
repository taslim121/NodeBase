import AuthLayout from "@/feature/auth/component/auth-layout";

const Layout = ({children}: {children: React.ReactNode}) => {
    return <AuthLayout>{children}</AuthLayout>;
}; 

export default Layout;