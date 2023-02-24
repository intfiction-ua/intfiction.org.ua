import cyrillicToTranslit from 'cyrillic-to-translit-js';

export const formatDate = (date) => new Date(date).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' });

export const formatDateM = (date) => new Date(date).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long' });

export const convert2translit = (text) => cyrillicToTranslit({ preset: 'uk' }).transform(text, '_').toLowerCase();

export const convert2cyrillic = (text) => cyrillicToTranslit({ preset: 'uk' }).reverse(text, '_').toLowerCase();
