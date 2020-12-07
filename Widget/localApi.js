const localApi = {
    async getNews() {
        return {
            articles: [
                {
                    "source": {
                        "id": "lenta",
                        "name": "Lenta"
                    },
                    "author": null,
                    "title": "Тарасова оценила катание превзошедшей два мировых рекорда ученицы Тутберидзе - Lenta.ru",
                    "description": "Заслуженный тренер СССР Татьяна Тарасова оценила катание фигуристки группы Этери Тутберидзе Камилы Валиевой на пятом этапе Кубка России. «Нет недостатков у нее. С Валиевой будет тяжело бороться. У нее есть все — и красота, и миловидность, и невероятные элемен…",
                    "url": "https://lenta.ru/news/2020/12/07/tarasova/",
                    "urlToImage": "https://icdn.lenta.ru/images/2020/12/07/09/20201207095627340/share_7b19008f6c761c838a19cd892676928f.jpg",
                    "publishedAt": "2020-12-07T08:08:00Z",
                    "content": ". .\r\n , , . « . \"\" , », .\r\n, , - . « . . , , . », .\r\n . , . .\r\n, . , ."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Kommersant.ru"
                    },
                    "author": null,
                    "title": "В Астраханской области дети массово отравились хлором в бассейне - Новости – Общество - Коммерсантъ",
                    "description": "Подробнее на сайте",
                    "url": "https://www.kommersant.ru/doc/4603480",
                    "urlToImage": "https://im.kommersant.ru/SocialPics/4603480_26_0_1956260770",
                    "publishedAt": "2020-12-07T08:04:00Z",
                    "content": "«». , -. , (. «, » . 2 . 238 ).\r\n, 9:15 (8:15 ). , 30 , .\r\n, 17 , 15 2 . , .\r\n ,"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Vz.ru"
                    },
                    "author": null,
                    "title": "Америка толкает Украину к захвату «крымского плацдарма» - ВЗГЛЯД.РУ",
                    "description": "Украина вновь активизировала усилия по так называемой деоккупации Крыма, затихшие после ухода Порошенко заявления Киева по этому поводу звучат с новой силой. В частности, в Верховной раде появилось целое объединение «Крымская платформа», предпринимаются попыт…",
                    "url": "https://vz.ru/world/2020/12/7/1074246.html",
                    "urlToImage": "https://img.vz.ru/upimg/soc/soc_1074246.jpg",
                    "publishedAt": "2020-12-07T08:04:00Z",
                    "content": ", . , « », . ?\r\n    « ». «», « » « », - - * . ... , . \r\n, « » . , « », «» ( , ) . \r\n- . ( , , ), 2014 , - . \r\n, 2014 ,  , : « , . -, , , -. , , , , , ». (, ) , , , - . \r\n , , - , , , . , , 2015  : « … [+826 chars]"
                },
                {
                    "source": {
                        "id": "lenta",
                        "name": "Lenta"
                    },
                    "author": null,
                    "title": "В России за сутки выявлено более 28 тысяч новых случаев заражения коронавирусом - Lenta.ru",
                    "description": "В России за сутки выявлено еще 28 142 новых случая заражения коронавирусом. За все время эпидемии было инфицированы 2 488 912 жителей. Больше всего заражений за день зафиксировано в Москве, Петербурге, Подмосковье. Меньше всего — в Ненецком автономном округе …",
                    "url": "https://lenta.ru/news/2020/12/07/daily/",
                    "urlToImage": "https://icdn.lenta.ru/images/2020/12/07/10/20201207101718902/share_6f3c54aa93551a2513aeb75ca496c348.jpg",
                    "publishedAt": "2020-12-07T07:51:00Z",
                    "content": "28 142 85 . 2 488 912 , ..\r\n (7279), (3741), (1315). (5) (2).\r\n 24 18 850 , 456 . 1,95 , 43 597 .\r\n6 . 29 039 ."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gazeta.ru"
                    },
                    "author": null,
                    "title": "«Непосредственно Каха» в четвертый раз возглавил российский прокат - Газета.Ru",
                    "description": "Фильм «Непосредственно Каха» в четвертый раз подряд возглавил российский прокат, сообщает портал kinobusiness.com .",
                    "url": "https://www.gazeta.ru/culture/news/2020/12/07/n_15327799.shtml",
                    "urlToImage": "https://img.gazeta.ru/files3/937/13362937/kinopoisk.ru-Neposredstvenno_2C-Kaha_21-3474079-pic905-895x505-76480.jpg",
                    "publishedAt": "2020-12-07T07:31:54Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Ria.ru"
                    },
                    "author": "",
                    "title": "В Минздраве подняли вопрос о новых ограничениях из-за коронавируса - РИА НОВОСТИ",
                    "description": "Министр здравоохранения Михаил Мурашко анонсировал возможные новые ограничения из-за COVID-19. РИА Новости, 07.12.2020",
                    "url": "https://ria.ru/20201207/koronavirus-1587964142.html",
                    "urlToImage": "https://cdn21.img.ria.ru/images/sharing/article/1587964142.jpg?15833295141607329256",
                    "publishedAt": "2020-12-07T07:31:51Z",
                    "content": "https://ria.ru/20201207/koronavirus-1587964142.html\r\n/html/head/meta[@name='og:title']/@content\r\n/html/head/meta[@name='og:description']/@content\r\nhttps://cdn25.img.ria.ru/images/07e4/0b/06/158332951… [+672 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gazeta.ru"
                    },
                    "author": null,
                    "title": "Дриусси раскритиковал «Зенит» и захотел вернуться в Аргентину - Газета.Ru",
                    "description": "Форвард «Зенита» Себастьян Дриусси крайне жестко высказался о своем нынешнем клубе. Аргентинец признался, что его не устраивает положение дел в стане сине-бело-голубых, в связи с чем он бы хотел продолжить карьеру на родине. «Газета.Ru» — о новой проблеме в к…",
                    "url": "https://www.gazeta.ru/sport/2020/12/07/a_13389661.shtml",
                    "urlToImage": "https://img.gazeta.ru/files3/847/13389847/RIAN_6396643.HR-pic905-895x505-24385.jpg",
                    "publishedAt": "2020-12-07T07:28:06Z",
                    "content": "-2020/21 «» . ( , ) . TyC Sports : , .\r\n« « », . … . ! », — .\r\n : «» . , , .\r\n «», . , .\r\n« . : , , , — «». — . , , , , . , .\r\n , . , , , , ».\r\n , — , . , , - (), .\r\n« . , – . , . , , . , « », . , , … [+196 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tdnu.ru"
                    },
                    "author": null,
                    "title": "Сильная иммунная реакция выявлена у бессимптомных носителей коронавируса COVID-19 - ToDay News Ufa",
                    "description": "Необычная реакция бессимптомных больных на коронавирус удивила международную группу биологов.",
                    "url": "https://tdnu.ru/article/science/silnaya-immunnaya-reaktsiya-vyyavlena-u-bessimptomnykh-nositeley-koronavirusa-covid-19/",
                    "urlToImage": null,
                    "publishedAt": "2020-12-07T07:07:30Z",
                    "content": "pixabay.com\r\n.\r\nCOVID-19 , ToDay News Ufa. , .\r\n, , , . , COVID-19.\r\n- .\r\n. , «» -. , , .\r\n: COVID-19 , ."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Interfax.ru"
                    },
                    "author": null,
                    "title": "В индийском городе больше 300 человек попали в больницу с загадочными симптомами - Интерфакс",
                    "description": "В Индии в городе Элуру за минувшие выходные более 315 человек были госпитализированы с похожими симптомами неизвестной болезни, сообщает The Hindu.",
                    "url": "https://www.interfax.ru/world/740192",
                    "urlToImage": "https://www.interfax.ru/aspimg/740192.png",
                    "publishedAt": "2020-12-07T07:04:00Z",
                    "content": ". 7 . INTERFAX.RU - 315 , The Hindu. .\r\n , , . The Indian Express, , . .\r\n , 5 , 55, , 6 , - 170, 270, - 315. . , .\r\n , . 170 . .\r\n . . .\r\n , , , ."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Vesti.ru"
                    },
                    "author": null,
                    "title": "Японский \"Сокол\" раскроет тайну возникновения жизни на Земле - Вести.Ru",
                    "description": "Грунт с астероида Рюгу доставил на Землю японский космический аппарат \"Хаябуса-2\" (\"Сокол\"). Это позволит разгадать тайну возникновения жизни на Земле. \"Хаябуса\", передохнув, отправится на своем ионном двигателе к следующему еще более дальнему астероиду в 800…",
                    "url": "https://www.vesti.ru/article/2495333",
                    "urlToImage": "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/307/412/0.jpg",
                    "publishedAt": "2020-12-07T06:52:00Z",
                    "content": ". . ?\r\n 12 . – 3 .\r\n JAXA - , .\r\n 10 , – , 300 , - . .\r\n\" , \", – .\r\n6 \"-2\" (\"\") 520 . . , \"\" . – .\r\n\" , , , , , . – \", – JAXA .\r\n, \"\" , , , . .\r\n , , , . , - , , . , , 4,5 .\r\n\" . , . , \", – JAXA .\r\n8… [+35 chars]"
                },
                {
                    "source": {
                        "id": "lenta",
                        "name": "Lenta"
                    },
                    "author": null,
                    "title": "Производитель Superjet 100 провалит план по поставкам - Lenta.ru",
                    "description": "В текущем году производитель Sukhoi SuperJet 100 «Региональные самолеты» успеет передать покупателям не более 16 лайнеров и таким образом провалит план по поставкам, составляющий 22 борта. Причиной задержки стали медлительность предприятия, которая наблюдаетс…",
                    "url": "https://lenta.ru/news/2020/12/07/ssj/",
                    "urlToImage": "https://icdn.lenta.ru/images/2020/12/07/09/20201207090013824/share_fc050473b01228230ffb2df3ce32f93c.jpg",
                    "publishedAt": "2020-12-07T06:34:00Z",
                    "content": "Sukhoi SuperJet 100 « » 16 , 22 . , (), «».\r\n , , 15-30 . , 59 SSJ-100, .\r\n«», « », . , .\r\n , «», Red Wings, «». SSJ-100 , .\r\n« » ( « » ) SuperJet 100, .\r\n , « » 59 , . . . , «» SSJ-100 «»."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Rg.ru"
                    },
                    "author": null,
                    "title": "В США назвали причину \"акустических атак\" на дипломатов - Российская Газета",
                    "description": "Недомогание американских дипломатов в посольстве на Кубе и в генконсульстве в китайском Гуанчжоу могло быть вызвано радиочастотным воздействием. Такую версию выдвинули в Национальной академии наук, инженерии и медицины США",
                    "url": "https://rg.ru/2020/12/07/v-ssha-nazvali-prichinu-akusticheskih-atak-na-diplomatov.html",
                    "urlToImage": "//cdnimg.rg.ru/img/content/200/35/90/iStock-542823584_t_650x433.jpg",
                    "publishedAt": "2020-12-07T06:30:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "rbc",
                        "name": "RBC"
                    },
                    "author": null,
                    "title": "Производители предупредили о подорожании говядины - РБК",
                    "description": "Сейчас 1 кг говядины стоит в 3,6 раза дороже курицы. Но, как уверяют производители, чтобы разведение коров было рентабельным, цены должны еще вырасти хотя бы на 15%. Этому может способствовать отмена тарифных квот для импортеров",
                    "url": "https://www.rbc.ru/business/07/12/2020/5fca647a9a7947064e836aea",
                    "urlToImage": "https://s0.rbk.ru/v6_top_pics/media/img/2/43/756073100318432.jpg",
                    "publishedAt": "2020-12-07T06:25:00Z",
                    "content": ", ,  — HoReCa (, ) , .\r\n . 1  ( ) 41% (356,5 .) 3,6 (140,6 .), . , - , .\r\n - , . : , 2020 1,65 , 1,5% , .\r\n : 2 , , . — 2020 , , 192,1 . , , 71,8 . .,  — 51,3 . ,  — 40,2 . .\r\n , , . , - , , ,  — (10… [+271 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "F1news.ru"
                    },
                    "author": null,
                    "title": "Тото Вольфф: Мы сработали откровенно плохо - все новости Формулы 1 2020 - Формула 1 на F1News.Ru",
                    "description": "Гран При Сахира стал для Mercedes самым неудачным этапом сезона из всех прошедших - Валттери Боттас и Джордж Расселл финишировали только восьмым и девятым. Итоги уик-энда подвел руководитель команды Тото Вольфф.",
                    "url": "https://www.f1news.ru/interview/wolff/149388.shtml",
                    "urlToImage": "https://cdn.f1ne.ws/userfiles/wolff/149388.jpg",
                    "publishedAt": "2020-12-07T06:19:00Z",
                    "content": "Mercedes - . - .\r\n: , Mercedes , , , . ? : , . Racing Point , . , - , . , , .\r\n , , . , , .\r\n: , ? : . - -, . : \r\n: -? : Hard , , . , .\r\n: ? - Mercedes ... : - , . - . . , .\r\n: , ... : , . - Mercedes… [+100 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Avtonovostidnya.ru"
                    },
                    "author": "Иван Бахарев",
                    "title": "Lada Granta получит мультимедийную систему с «Яндекс.Авто» - Автоновости дня",
                    "description": "LADA Granta в спецверсии #CLUB может получить мультимедийную систему с «Яндекс.Авто». Два тестовых автомобиля с таким головным устройством были собраны на",
                    "url": "https://avtonovostidnya.ru/novinki/234948-lada-granta",
                    "urlToImage": "https://avtonovostidnya.ru/wp-content/uploads/2020/04/interer-lada-xray-cross-instinct-e1606466624947.jpg",
                    "publishedAt": "2020-12-07T06:18:58Z",
                    "content": "LADA Granta #CLUB «.». «» . «AvtoVAZ News» .\r\n« - «Granta» #Club « », .\r\n«» , ( , #CLUB) 2021 .\r\n, LADA «.» LADA XRay Cross Instinct LADA XRay Cross Black. 8- «»."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gazeta.ru"
                    },
                    "author": null,
                    "title": "Mash: Игорь Угольников госпитализирован с коронавирусом - Газета.Ru",
                    "description": "Актер Игорь Угольников госпитализирован с пневмонией после заражения коронавирусом нового типа, сообщает Telegram-канал Mash .",
                    "url": "https://www.gazeta.ru/culture/news/2020/12/07/n_15327361.shtml",
                    "urlToImage": "https://img.gazeta.ru/files3/709/13389709/RIAN_6349311.HR-pic905-895x505-23252.jpg",
                    "publishedAt": "2020-12-07T06:12:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportmail.ru"
                    },
                    "author": "Спорт Mail.ru",
                    "title": "Флойд Мэйуэзер проведет выставочный бой с блогером Логаном Полом 20 февраля - Спорт Mail.ru",
                    "description": "Американский боксер Флойд Мэйуэзер проведет выставочный бой с популярным видеоблогером Логаном Полом 20 февраля 2021 года. Об этом боксер объявил на своей странице в Instagram.",
                    "url": "https://sportmail.ru/news/boxing/44447621/",
                    "urlToImage": "https://news.mail.ru/social_preview/44447621/sport/?time=02a8b47cf07f1ddecbea6330c4465d4e",
                    "publishedAt": "2020-12-07T05:51:38Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "rbc",
                        "name": "RBC"
                    },
                    "author": null,
                    "title": "С невыездных россиян-должников взыскали ₽36 млрд - РБК",
                    "description": "С россиян, получивших ограничение на выезд за границу из-за долгов, за десять месяцев этого года взыскали около 36 млрд руб. Об этом сообщает РИА Новости со ссылкой на пресс-службу Федеральной ...",
                    "url": "https://www.rbc.ru/rbcfreenews/5fcdb5869a7947c320fc4e9e",
                    "urlToImage": "https://s0.rbk.ru/v6_top_pics/media/img/1/79/756073178997791.jpg",
                    "publishedAt": "2020-12-07T05:11:00Z",
                    "content": ""
                },
                {
                    "source": {
                        "id": null,
                        "name": "Www.e1.ru"
                    },
                    "author": null,
                    "title": "Как сделать крутое фото на телефон | e1.ru - новости Екатеринбурга - Новости Екатеринбурга – e1.ru",
                    "description": "Даже если не знаешь, что такое экспозиция и диафрагма",
                    "url": "https://www.e1.ru/news/spool/news_id-69601331.html",
                    "urlToImage": "https://static.ngs.ru/news/2020/social/c0c5c79a944e53740921c4878d1052.png",
                    "publishedAt": "2020-12-07T05:01:21Z",
                    "content": ", . «» , .\r\n1. \r\n . . .\r\n2. \r\n 3*3. . .\r\n3. \r\n . , , «+» .\r\n4. \r\n , . , .\r\n5. \r\n Xiaomi . , .\r\n «» : Xiaomi.\r\n 15 2021 . 5 :\r\n<ul><li>Redmi Note 8 Pro 64 GB 14 990\r\n . 19 990;\r\n</li></ul><ul><li>Redm… [+324 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Kommersant.ru"
                    },
                    "author": null,
                    "title": "Онищенко призвал отказаться от длинных новогодних праздников - Новости – Общество - Коммерсантъ",
                    "description": "Подробнее на сайте",
                    "url": "https://www.kommersant.ru/doc/4603386",
                    "urlToImage": "https://im.kommersant.ru/SocialPics/4603386_26_0_1052078070",
                    "publishedAt": "2020-12-07T04:52:00Z",
                    "content": ", . , .\r\n« , , , . , . , . - (. ) , , », « ». \r\n , . , 31 . \r\n« , . 31 , . . . , 14-, 90- , , , - ?» .\r\n . 2021 1 3 . , , . \r\n FM « »."
                }
            ]
        }
    }
}



export default localApi;