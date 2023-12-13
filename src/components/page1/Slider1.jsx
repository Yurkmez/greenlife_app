import { useState } from 'react';
// npm install classnames --save
// Для того, чтобы использовать
// className={classNames(styleSlider1.rowFlex)}
import classNames from 'classnames';
import listImage from '../date/listImageSlider1';
import listText from '../date/listTextSlider1';

import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';

import styleSlider1 from './slider1.module.css';

let opacityArr = [1.0, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6];
let imgIndexVar = 0;
// const indexArr = listImage.map((item, index) => index);
// console.log(indexArr);

const Slider1 = () => {
    const changeImage = (index) => {
        let opacityArrVar = opacityArr.map((el) => (el = 0.6));
        opacityArrVar[index] = 1.0;
        opacityArr = opacityArrVar;

        setData({
            imgIndex: index,
            imgShow: listImage[index],
            imgText: listText[index],
            opacity: opacityArr,
        });
    };

    const [data, setData] = useState({
        imgIndex: 0,
        imgShow: listImage[0],
        imgText: listText[0],
        opacity: opacityArr,
    });

    return (
        <>
            <h4 className={styleSlider1.headText}>Характеристика объекта</h4>
            <div className={styleSlider1.mainBlock}>
                {/* Text */}
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Комплекс
                    находится в одном из престижных и экологически чистом районе
                    Антальи - Дошемеалти. Неплотно застроенный, находящийся на
                    возвышенности, в окружении леса и гор он предоставляет
                    прекрасную возможность жить в тишине и спокойствии в
                    отдалении от городского шума, наслаждаясь красивыми видами.
                    Желание окунутся в городскую среду или совершить большой
                    шопинг ограничено 5 минутной поездкой, столько же времени
                    занимает дорога до морского пляжа. Инфраструктура райoна
                    развита и все необходимое для повседневной жизни находится в
                    шаговой доступности или 3 минутной езды на автомобиле, а
                    лучше, на велосипеде.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Здание
                    построено по технологии "умный" дом - с видеонаблюдением,
                    дистанционным допуском в здание из квартиры. Подведен
                    природный газ, что редко встретишь в домах Антальи. Здание
                    теплоизолировано. В проекте оснащение здания солнечными
                    панелями. Все это позволит поддерживать комфортную
                    температуру в жилых помещениях круглый год при низком уровне
                    коммунальных затрат.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;В
                    комплексе есть крытый круглогодично действующий бассейн, СПА
                    центр, включающий сауну, хамам и фитнес зал (все эти услуги
                    для проживающих бесплатны), есть салон красоты, продуктовый
                    магазин, кафе. Комплекс оснащен подземным паркингом,
                    лифтами, все входы оборудованы пандусами для лиц с
                    ограниченными возможностями, есть консьерж и охрана.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Дизайн
                    общественных зон и приватных интерьеров комплекса выполнен
                    архитектором Шамсутдиновой Лирой. В отделке комплекса
                    воплощены идеи отражения вневременной роскоши, античных
                    истоков этой земли и уникальность природы Средиземноморья.
                    Входная группа и рецепция оформлены в классической
                    Средиземноморской традиции - мраморные полы, водопад,
                    вертикальное озеленение и пано от Виктории Фоминой, в
                    которой в фантастическом стиле отражены местные
                    достопримечательности, история и краски Анатолийского
                    побережья Средиземного моря.
                </p>
                {/* 1 Image */}
                <div className={styleSlider1.imageDemo}>
                    <p
                        className={styleSlider1.prev}
                        onClick={() => {
                            if (data.imgIndex === 0) {
                                imgIndexVar = listImage.length - 1;
                            } else {
                                imgIndexVar = data.imgIndex - 1;
                            }
                            changeImage(imgIndexVar);
                        }}
                    >
                        ❮
                    </p>
                    <img
                        src={data.imgShow}
                        className={styleSlider1.imageDemoSize}
                        alt="Pict"
                    />
                    <p
                        className={styleSlider1.next}
                        onClick={() => {
                            if (data.imgIndex === listImage.length - 1)
                                imgIndexVar = 0;
                            else imgIndexVar = data.imgIndex + 1;
                            changeImage(imgIndexVar);
                        }}
                    >
                        ❯
                    </p>
                </div>
                <div className={styleSlider1.imageDemoText}>{data.imgText}</div>

                {/* 2 Slider */}
                <div className={classNames(styleSlider1.sliderRow)}>
                    {/* _____________________________ */}
                    <div className={styleSlider1.sliderIcons}>
                        <AiFillCaretLeft
                            className={styleSlider1.sliderIconLeft}
                            onClick={() => {
                                if (data.imgIndex === 0)
                                    imgIndexVar = listImage.length - 1;
                                else imgIndexVar = data.imgIndex - 1;
                                changeImage(imgIndexVar);
                            }}
                        />
                    </div>
                    {/* _____________________________ */}
                    {listImage.map((image, index) => {
                        return (
                            <img
                                className={styleSlider1.demo}
                                src={image}
                                key={index}
                                style={{ opacity: data.opacity[index] }}
                                onClick={() => {
                                    changeImage(index);
                                }}
                                alt={index}
                            />
                        );
                    })}
                    {/* _____________________________ */}
                    <div className={styleSlider1.sliderIcons}>
                        <AiFillCaretRight
                            className={styleSlider1.sliderIconRight}
                            onClick={() => {
                                if (data.imgIndex === listImage.length - 1)
                                    imgIndexVar = 0;
                                else imgIndexVar = data.imgIndex + 1;
                                changeImage(imgIndexVar);
                            }}
                        />
                    </div>
                    {/* _____________________________ */}
                </div>
            </div>
        </>
    );
};

export default Slider1;
