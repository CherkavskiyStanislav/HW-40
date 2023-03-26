import React, { useState } from "react";
import Article from "./components/Article";

 function App () {

  const en = {
    titleName: 'NVIDIA NEWS',
    descriptionName: 'NVIDIA Accelerated AI on Azure',
    description: 'Article description:',
    preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
    content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
    author: 'Author: Mike',
    published: 'Published: 06.12.2022',
    theme: 'Theme: Video cards',
    markAsRead: 'Mark as read',
    readButton: 'Read',
    closeButton: 'Close',
    markAsUnread: 'Mark as unread',
    currentLang: 'EN',
  }

  const ua = {
    titleName: 'НОВИНИ NVIDIA',
    descriptionName: 'Прискорений штучний інтелект NVIDIA в Azure',
    description: 'Опис статті:',
    preview: 'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
    content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
    author: 'Автор: Майк',
    published: 'Опубліковано: 06.12.2022',
    theme: 'Тема: відео карти',
    markAsRead: 'Прочитано',
    readButton: 'Читати',
    closeButton: 'Закрити',
    markAsUnread: 'Не прочитано',
    currentLang: 'UA'
  }

  const [isShow, setIsShow]  = useState(false);
  const [isRead, setIsRead]  = useState(false);
  const [lang, setLang] = useState(en);

  const changeLang = (newLang) => {
    setLang(newLang);
  }

  const toggleArticle = () => {
    setIsShow(!isShow);
    setIsRead(!isRead);
  }

  const markAsRead = () => {
    setIsRead(true);
  }

  const markAsUnread = () => {
    setIsRead(false);
  }

  return (
    <div className="wrapper">
      <h1 className="title">{lang.titleName}</h1>
      <div className="article">
          <Article show={isShow} lang = {lang} isRead={isRead}>
          <div className="article__title">
            <h2>{lang.descriptionName}</h2>
          </div>
          </Article>
        <div className="article__actions">
          <button onClick={markAsRead} className="article__btn">
            {lang.markAsRead}
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {isRead ? lang.closeButton : lang.readButton}
          </button>
          <button onClick={markAsUnread} className="article__btn">
            {lang.markAsUnread}
          </button>
        </div>
      </div>
      <div className="lang">
        <button className="lang-btn" onClick={() => changeLang(ua)}>UA</button>
        <button className="lang-btn" onClick={() => changeLang(en)}>EN</button>
      </div>
    </div> 
    );
  }
export default App;