// ---------------------------------------------------------------------------
// Centralised multilingual content. Each language lives in its own file under
// ./translations/<code>.js and is keyed here by the same code declared in
// LanguageContext (LANGUAGES). Languages without a dictionary fall back to
// English in LanguageContext.
// ---------------------------------------------------------------------------

import en from './translations/en';
import hi from './translations/hi';
import bn from './translations/bn';
import gu from './translations/gu';
import ta from './translations/ta';
import mr from './translations/mr';
import te from './translations/te';
import kn from './translations/kn';
import ml from './translations/ml';
import or from './translations/or';
import pa from './translations/pa';
import ur from './translations/ur';

export const translations = {
  en,
  hi,
  bn,
  gu,
  ta,
  mr,
  te,
  kn,
  ml,
  or,
  pa,
  ur,
};
