const Skeleton = ({ className = "", variant = "rect" }) => {
    return (
        <div
            className={`animate-pulse ${variant === "circle" ? "rounded-full" : "rounded-lg"} ${className}`}
            style={{ backgroundColor: "var(--color-bg-200, #e5e7eb)" }}
        />
    )
}

export const SkeletonCard = () => (
    <div className="flex flex-col rounded-[50px] border-2 border-[#5C4033]/20 dark:border-[#DF7F1D]/20 w-[320px] lg:w-[432px] overflow-hidden p-3 gap-3">
        <Skeleton className="w-full h-[180px] lg:h-[250px] rounded-2xl" />
        <Skeleton className="w-2/3 h-5" />
        <Skeleton className="w-1/3 h-4" />
        <div className="flex justify-between mt-2">
            <Skeleton className="w-20 h-8 rounded-xl" />
            <Skeleton className="w-24 h-8 rounded-xl" />
        </div>
    </div>
)

export const SkeletonLine = ({ width = "100%" }) => (
    <Skeleton className={`h-4 ${typeof width === "string" ? width : `${width}px`}`} />
)

export default Skeleton
