import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation();

  return (
    <div>
      {t('Main page')}
      {t('new page')}
    </div>
  );
};

export default MainPage;
