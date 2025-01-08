import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface ActionMenuProps {
    onEdit: () => void;
    onDelete: () => void;
}
export const ActionMenu: React.FC<ActionMenuProps> = ({ onEdit, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex justify-end">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                className="p-1.5 rounded-lg hover:bg-gray-100"
            >
                <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 top-8 w-48  bg-white rounded-lg shadow-lg border z-50">
                        <button
                            onClick={() => {
                                onEdit();
                                setIsOpen(false);
                            }}
                            className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                        >
                            <Pencil className="w-4 h-4 mr-2" /> Edit
                        </button>
                        <button
                            onClick={() => {
                                onDelete();
                                setIsOpen(false);
                            }}
                            className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-b-lg"
                        >
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
