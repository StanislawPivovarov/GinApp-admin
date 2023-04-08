import { notification } from "antd";

export const success = () => {
    notification.success({
      message: 'Успешно сохранено!',
      description:
        'Новый товар был успешно добавлен в базу данных.',
    });
  };

  export const fail = () => {
    notification.error({
      message: 'Изменения не сохранены!',
      description:
        'Проверьте правильность данных.',
    });
  };
