import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const PrivateRoute = ({ children }:any) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    // Пока проверка статуса аутентификации выполняется, можно отобразить загрузочный экран
    return (<div>Loading...</div>)
  }

  if (error) {
    // Если произошла ошибка при проверке статуса аутентификации, можно отобразить сообщение об ошибке
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    // Если пользователь не залогинен, перенаправляем на страницу входа
    router.push("/");
    return null;
  }

  // Если пользователь залогинен, отображаем защищенные компоненты
  return <div>{children}</div>;
};

export default PrivateRoute;
