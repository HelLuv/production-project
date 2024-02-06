const interfaceStr = 'interface';

module.exports = (component) => `
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './${component}.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

${interfaceStr} ${component}Props {
    className?: string;
}

export const ${component} = memo((props: ${component}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    const mods: Mods = {
    
    }
    
    return (
        <div className={classNames(cls.${component}, mods, [className])}>
            ${component}
        </div>
    )
});`;
