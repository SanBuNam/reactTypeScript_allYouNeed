/* React component as prop: the right way
https://www.developerway.com/posts/react-component-as-prop-the-right-way */
import {ReactNode, ReactElement, useState} from 'react'
import AccessAlarmIconGoogle from '@mui/icons-material/AccessAlarm';
import { iconButtonClasses } from '@mui/material';

// -- as React Element
type ElementProps = {
    children: ReactNode;
    icon: ReactElement<IconProps>;
};

export const ButtonWithIconElement = ({...props}: ElementProps) => {
    return (
        <button>
            {props.icon}
            {props.children}
        </button>
    );
};

<ButtonWithIconElement icon={<AccessAlarmIconGoogle fontSize="small" color="warning" />}>
    button here
</ButtonWithIconElement> 

// modify pre-defined element.
export const ButtonWithIconElementModify = ({icon, children}: ElementProps) => {
    const clonedIcon = React.cloneElement(icon, { fontSize: 'small' });

    return (
        <button>
            {clonedIcon}
            {children}
        </button>
    );
};

// remove the fontSize property
<ButtonWithIconElement icon={<AccessAlarmIconGoogle color="warning" />}>
    button here
</ButtonWithIconElement>

// condition to overwrite the props
const clonedIcon = React.cloneElement(icon, {
    fontSize: iconButtonClasses.props.FontSize || 'small',
});
<ButtonWithIconElement icon={<AccessAlarmIconGoogle color="warning" fontSize="large" />} />





// -- as Component
type ComponentProps = {
    children: ReactNode;
    Icon: ComponentType<IconProps>;
};

export const ButtonWithIconComponent = ({children, Icon}: ComponentProps) => {

    return (
        <button>
            <Icon />
            {children}
        </button>
    );
};

const AccessAlarmIcon = () => <AccessAlarmIconGoogle fontSize="small" color="error" />;
const page = () => {
    return <ButtonWithIconComponent Icon={AccessAlarmIcon}>button here</ButtonWithIconComponent>    
}

// modify pre-defined element.
// give default value
export const ButtonWithIconComponentModify = ({ children, Icon }: ButtonProps ) => {
    return (
        <button>
            <Icon fontSize="small" />
            {children}
        </button>
    );
};

const AccessAlarmIcon = (props) => (
    // just ignore all the props coming from the button here
    // and override with our own values
    <AccessAlarmIconGoogle fontSize="large" color="error" />
  );





// -- as a function
type functionProps = {
    children: ReactNode;
    renderIcon: () => ReactElement<IconProps>;
};

export const ButtonWithIconRenderFunc = ({children: renderIcon }: functionProps) => {
    const icon = renderIcon();
    return (
        <button>
            {icon}
            {children}
        </button>
    );
};

<ButtonWithIconRenderFunc 
    renderIcon={() => (
        <AccessAlarmIconGoogle fontSize="small" color="success" />
    )}
/>

// modify pre-defined element.
const icon = renderIcon({
  fontSize: 'small',
});

/* 
<ButtonWithIconRenderFunc renderIcon={(settings) => <AccessAlarmIconGoogle fontSize={settings.fontSize} color="success" />}>
  button here
</ButtonWithIconRenderFunc>

<ButtonWithIconRenderFunc
  // ignore the setting here and write our own fontSize
  renderIcon={(settings) => <AccessAlarmIconGoogle fontSize="large" color="success" />}
>
  button here
</ButtonWithIconRenderFunc> 
*/


// Changing the icon when the button is hovered
export const ButtonWithIcon = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            ...
        </button>
    );
}

const clonedIcon = React.cloneElement(icon, {
    fontSize: icon.props.fontSize || 'small',
    isHovered: isHovered,
});

<ButtonWithIconElement icon={<AccessAlarmIconGoogle color="warning" />}>button here</ButtonWithIconElement>

