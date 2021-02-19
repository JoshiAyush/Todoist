import { G } from "./style.js";
import { Svg } from "./style.js";
import { Path } from "./style.js";
import { Circle } from "./style.js";
import { Ellipse } from "./style.js";
import { ClipPath } from "./style.js";

SvgContainer.G = ({ children, ...props }) => (
    <G {...props}>
        {children}
    </G>
);

SvgContainer.Path = ({ children, ...props }) => (
    <Path {...props}>
        {children}
    </Path>
);

SvgContainer.Circle = ({ children, ...props }) => (
    <Circle {...props}>
        {children}
    </Circle>
);

SvgContainer.ClipPath = ({ children, ...props }) => (
    <ClipPath {...props}>
        {children}
    </ClipPath>
);

SvgContainer.Ellipse = ({ children, ...props }) => (
    <Ellipse {...props}>
        {children}
    </Ellipse>
);

export function SvgContainer({ children, ...props }) {
    return (
        <Svg {...props}>
            {children}
        </Svg>
    );
}