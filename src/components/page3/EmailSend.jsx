// Реализовано по рекомендации https://victorbruce82.medium.com/how-to-send-emails-using-react-through-emailjs-no-server-code-needed-8e1453ef8796
// halilucar443@hotmail.com
// Регистрация в emailjs (https://dashboard.emailjs.com/sign-up):
// Настройки
// https://dashboard.emailjs.com/admin/templates/vws3v2n
import { useState } from 'react';
import { useRef } from 'react';
// npm i emailjs-com
import emailjs from 'emailjs-com';
import keys from '../../keys/index';
import styleEmail from './emailsend.module.css';

const EmailSend = () => {
    const [data, setData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_089cc4d',
                'template_1ed0nqp',
                form.current,
                'm2S4tchTsoqcBLRer'
                // keys.SERVISE_ID,
                // keys.TEMPLATE_ID,
                // form.current,
                // keys.PUBLIC_KEY
            )
            .then(
                (result) => {
                    alert('Сообщение отправлено!');
                    setData({
                        user_name: '',
                        user_email: '',
                        message: '',
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className={styleEmail.mainBlock}>
            <form ref={form} onSubmit={sendEmail}>
                <label>Ваше имя</label>
                <div className={styleEmail.short}>
                    <input
                        type="text"
                        name="user_name"
                        class="validate"
                        required
                        value={data.user_name}
                        onChange={(e) =>
                            setData({
                                ...data,
                                user_name: e.target.value,
                            })
                        }
                    />
                </div>
                <div className={styleEmail.short}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="user_email"
                        class="validate"
                        required
                        value={data.user_email}
                        onChange={(e) =>
                            setData({
                                ...data,
                                user_email: e.target.value,
                            })
                        }
                    />
                </div>
                <label>Текст сообщения</label>
                <textarea
                    name="message"
                    value={data.message}
                    onChange={(e) =>
                        setData({
                            ...data,
                            message: e.target.value,
                        })
                    }
                />
                <button type="submit" className="btn btn-primary">
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default EmailSend;
