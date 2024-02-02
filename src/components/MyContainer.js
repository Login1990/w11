import React from 'react'
import { useTranslation } from 'react-i18next';

function MyContainer() {
  const { t, i18n } = useTranslation();
  return (
    <div>{t("This is a front page")}</div>
  )
}

export default MyContainer