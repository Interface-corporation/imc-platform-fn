interface ProductPriceProps {
    price: string;
    originalPrice?: string;
}

export function ProductPrice({ price, originalPrice }: ProductPriceProps) {
    return (
        <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-xl   font-bold bg-gradient-to-r from-[#1E3A5F] to-[#25aae1] bg-clip-text text-transparent">
                ${price}
            </span>
            {originalPrice && (
                <span className="text-xs sm:text-lg text-gray-400 line-through">
                    {originalPrice}
                </span>
            )}
        </div>
    );
}