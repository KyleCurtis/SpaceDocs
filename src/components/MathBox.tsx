import { MathJax } from "better-react-mathjax";

const MathBox = ({children}: any) => {
    return (
        <div className="bg-[var(--cat-mocha-base)] p-3 rounded-md">
        <MathJax className="text-[var(--cat-mocha-text)] text-[20px]">
            {children}
        </MathJax>
        </div>
    )
}

export default MathBox;