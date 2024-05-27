import sprite from './../assets/sprite.svg';

type SvgIconProps = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const SvgIcon = ({iconId, width, height, viewBox}: SvgIconProps) => {
    return (
        <svg width={width || '24'}
             height={height || '24'}
             viewBox={viewBox || '0 0 24 24'}>
            <use xlinkHref={`${sprite}#${iconId}`}></use>
        </svg>
    );
};