import { MathJax } from "better-react-mathjax";

const MathBox = ({children}) => {
    return (
        <div className="bg-[var(--cat-mocha-base)] p-3 rounded-md">
        <MathJax className="text-white text-[20px]">
            {children}
        </MathJax>
        </div>
    )
}

export default MathBox;