import { G } from "./style.js";
import { Svg } from "./style.js";
import { Path } from "./style.js";

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

export function SvgContainer({ children, ...props }) {
    return (
        <Svg {...props}>
            {children}
        </Svg>
    );
}