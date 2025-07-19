'use client';

import {
  Accordion,
  AccordionContainer,
  Button,
  CardImage,
  CardService,
  CardVideo,
  CheckBox,
  CopyToClipboard,
  ExternalLink,
  FilterContainer,
  Img,
  PaginationItem,
  SectionTitle,
  Select,
} from '@/components';
import { useState } from 'react';

const Home = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>('0');
  const [accordionId, setAccordionId] = useState<string | null>('aco-1');

  const optionsSelect = [
    {
      label: 'Opcion 1',
      value: '0',
    },
    {
      label: 'Opcion 2',
      value: '1',
    },
  ];

  const handleAccordionClick = (id: string) => {
    setAccordionId(accordionId === id ? null : id);
  };

  return (
    <div>
      <h1>Test</h1>
      <div className="flex flex-col gap-6">
        <Button
          variant="filled"
          color="primary"
          className="w-fit"
        >
          Hoja de vida
        </Button>
        <CheckBox
          checked={isChecked}
          label="Value"
          onChange={(newValue) => setIsChecked(newValue)}
        />
        <CopyToClipboard value="anamaproducciones@gmail.com" />
        <Img
          src="https://res.cloudinary.com/miguelcc/image/upload/v1723831934/Copia_de_Copia_de_IMG_9869_ov9sqd.webp"
          alt="Documental"
          className="opacity-90 hover:opacity-40 transition"
          width={600}
          height={600}
        />
        <ExternalLink
          href="https://www.instagram.com/ana_ramireez03/"
          title="Instagram"
          ariaLabel="Boton de instagram"
        >
          Instagram
        </ExternalLink>
        <PaginationItem
          id="1"
          isSelected
          onClick={() => {}}
        >
          1
        </PaginationItem>
        <SectionTitle tag="h1">Acerca de mí</SectionTitle>
        <Select
          variant="filled"
          color="primary"
          value={selectValue}
          label="Prueba select"
          options={optionsSelect}
          onChange={(value) => setSelectValue(value)}
        />
        <AccordionContainer>
          <Accordion
            id="aco-1"
            labelTag="h3"
            label="Comunicadora audiovisual junior"
            place="Union noble"
            date="Enero 2025 - Presente"
            isOpen={accordionId === 'aco-1'}
            onClick={handleAccordionClick}
          >
            <ul className="flex flex-col gap-5">
              <li className="list-disc">
                Liderazgo y formación de un equipo de practicantes en producción audiovisual.
              </li>
              <li className="list-disc">
                Planeación, ejecución y aprobación de contenido: campañas organizacionales, redes y
                señalización digital.
              </li>
            </ul>
          </Accordion>

          <Accordion
            id="aco-2"
            labelTag="h4"
            label="Comunicadora audiovisual junior"
            place="Union noble"
            date="Enero 2025 - Presente"
            isOpen={accordionId === 'aco-2'}
            onClick={handleAccordionClick}
          >
            <ul className="flex flex-col gap-5">
              <li className="list-disc">
                Liderazgo y formación de un equipo de practicantes en producción audiovisual.
              </li>
              <li className="list-disc">
                Planeación, ejecución y aprobación de contenido: campañas organizacionales, redes y
                señalización digital.
              </li>
            </ul>
          </Accordion>
        </AccordionContainer>
        <CardImage
          id="image-1"
          image={{
            src: 'https://res.cloudinary.com/miguelcc/image/upload/v1723831934/Copia_de_Copia_de_IMG_9869_ov9sqd.webp',
            alt: 'Documental',
            width: 500,
            height: 400,
          }}
          label="Documental"
          onClick={() => {}}
        />
        <CardService
          labelTag="h4"
          label="Producción"
          description="Realización de videos corporativos y contenido para redes sociales, así como  producción en streaming y eventos, además de fotografía de producto."
        />
        <CardVideo
          id='video-1'
          src='https://res.cloudinary.com/miguelcc/video/upload/v1723839877/Logo_1Up_Azules_Y_Naranjas_bnlahh.mp4'
          title='Reel'
          description='reel description'
          date='2025'
          width={700}
          height={400}
          onClick={() => {}}
        />
        <FilterContainer />
      </div>
    </div>
  );
};

export default Home;
