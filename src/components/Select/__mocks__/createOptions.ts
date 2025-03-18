import { Option } from '../types/SelectTypes.ts';

/**
 * Создает массив опций-объектов с полями id, value
 * @param numberOfOptions сколько опций нужно создать
 */
export const createOptions = (numberOfOptions: number = 6): Option[] => {
  if (!numberOfOptions) {
    return [];
  }
  return Array(numberOfOptions)
    .fill(null)
    .map((_, index) => {
      return { id: `${index}`, value: `Option ${index + 1}` };
    });
};
