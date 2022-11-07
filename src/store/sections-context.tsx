import { ReactNode, createContext, useState, useCallback } from 'react';

type SectionsType = {
  [key: string]: number;
};

type SectionsContextType = {
  sections: SectionsType;
  updateSection: (title: string, offsetTop: number) => void;
};

const SectionsContext = createContext<SectionsContextType>({
  sections: {},
  updateSection: () => {},
});

export default SectionsContext;

type SectionsContextProviderProps = {
  children?: ReactNode;
};

export const SectionsContextProvider = ({
  children,
}: SectionsContextProviderProps) => {
  const [currentSections, setCurrentSections] = useState<SectionsType>({});

  const updateSectionHandler = useCallback((title: string, offsetTop: number) => {
    setCurrentSections((latest) => {
      const sections = { ...latest };
      sections[title] = offsetTop;
      return sections;
    });
  }, []);

  const context = {
    sections: currentSections,
    updateSection: updateSectionHandler,
  };

  return (
    <SectionsContext.Provider value={context}>
      {children}
    </SectionsContext.Provider>
  );
};
