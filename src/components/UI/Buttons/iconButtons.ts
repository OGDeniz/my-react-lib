// src/data/iconButtons.ts

import IconButton from './IconButton';

interface IconButtonProps {
    id: string;
    label: string;
    icon: string;
    onClick: () => void;
}

const iconButtons: IconButtonProps[] = [
    {
        id: 'home',
        label: 'Home',
        icon: 'add-icon',
        onClick: () => {alert('Add button clicked')
        },
    },
    {
        id: 'save',
        label: 'Save',
        icon: 'save-icon',
        onClick: () => {
            console.log('Save button clicked');
        },
    },
    {
        id: 'delete',
        label: 'Delete',
        icon: 'delete-icon',
        onClick: () => {
            console.log('Delete button clicked');
        },
    },
    {
        id: 'edit',
        label: 'Edit',
        icon: 'edit-icon',
        onClick: () => {
            console.log('Edit button clicked');
        },
    },
];

export default iconButtons;