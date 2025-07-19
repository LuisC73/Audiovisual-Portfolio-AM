import { Button } from '@/components/atoms';
import { useDropdown } from '@/hooks';
import { Dropdown } from '../../molecules/Dropdown/Dropdown';

export const FilterContainer = () => {
  const { isOpen, toggle, close } = useDropdown();

  return (
    <div className='flex items-center gap-3 p-3'>
      <Button
        variant="filled"
        color="primary"
      >
        Todos
      </Button>
      <Dropdown
        button={{ variant: 'outline', color: 'primary' }}
        buttonChildren="Filtrar"
        isOpen={isOpen}
        onToggle={toggle}
      >
        <div className="p-4">
          <p className="mb-2">Contenido del dropdown</p>
          <button
            onClick={close}
            className="text-sm text-red-500 hover:underline"
          >
            Cerrar
          </button>
        </div>
      </Dropdown>
    </div>
  );
};
