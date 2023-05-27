import { notification } from "antd";

export const success = () => {
    notification.success({
      message: 'Успешно сохранено!',
      description:
        'Новый товар был успешно добавлен в базу данных.',
    });
  };

export const successCategory = () => {
  notification.success({
    message: 'Успешно сохранено!',
    description:
      'Вы успешно добавили новую категорию',
  });
}

export const successUpdate = (message: any) => {
  notification.success({
    message: `Вы успешно обновили ${message}!`,
    description:
      'Обновления уже отобразились в приложении!',
  });
}

  export const fail = () => {
    notification.error({
      message: 'Изменения не сохранены!',
      description:
        'Данные не были сохранены.',
    });
  };

  export const failValidation = () => {
    notification.error({
      message: 'Валидация данных не пройдена!',
      description:
        'Проверьте, все ли поля заполнены!.',
    });
  }

  export const newOrder = () => {
    notification.info({
      duration: null,
      message: 'Пользователь сделал заказ!',
      description:
        'Нажмите на уведомление, чтобы увидеть подробности!.',
    });
  }