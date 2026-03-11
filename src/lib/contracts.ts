export type ContractType = {
  id: string
  name: string
  description: string
  category: 'freelancer' | 'agenti' | 'general'
  price: number
  fields: ContractField[]
}

export type ContractField = {
  id: string
  label: string
  type: 'text' | 'email' | 'phone' | 'date' | 'number' | 'textarea' | 'select'
  placeholder?: string
  required: boolean
  options?: string[]
}

export const CONTRACT_TYPES: ContractType[] = [
  {
    id: 'contract-prestari-servicii',
    name: 'Contract Prestări Servicii',
    description: 'Contract standard pentru PFA și freelanceri IT, design, consultanță',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'prestator_nume', label: 'Numele prestatorului', type: 'text', required: true, placeholder: 'Ex: Ion Popescu PFA' },
      { id: 'prestator_cui', label: 'CUI/CIF prestator', type: 'text', required: true, placeholder: 'Ex: RO12345678' },
      { id: 'prestator_adresa', label: 'Adresa prestatorului', type: 'textarea', required: true, placeholder: 'Str. ..., nr. ..., Cluj-Napoca' },
      { id: 'beneficiar_nume', label: 'Numele beneficiarului', type: 'text', required: true, placeholder: 'Ex: ABC SRL' },
      { id: 'beneficiar_cui', label: 'CUI beneficiar', type: 'text', required: true, placeholder: 'Ex: RO87654321' },
      { id: 'beneficiar_adresa', label: 'Adresa beneficiarului', type: 'textarea', required: true, placeholder: 'Str. ..., nr. ...' },
      { id: 'obiect_contract', label: 'Obiectul contractului', type: 'textarea', required: true, placeholder: 'Ex: Dezvoltare aplicație web, design grafic, consultanță IT' },
      { id: 'valoare', label: 'Valoarea contractului (RON)', type: 'number', required: true, placeholder: 'Ex: 5000' },
      { id: 'moneda', label: 'Moneda', type: 'select', required: true, options: ['RON', 'EUR', 'USD'] },
      { id: 'termen_livrare', label: 'Termen de livrare', type: 'date', required: true },
      { id: 'termen_plata', label: 'Termen de plată (zile)', type: 'number', required: true, placeholder: 'Ex: 30' },
      { id: 'acceptare_livrabil_zile', label: 'Termen acceptare livrabil (zile)', type: 'number', required: false, placeholder: 'Ex: 5' },
      { id: 'penalitate_intarziere_plata', label: 'Penalitate întârziere plată (%/zi)', type: 'number', required: false, placeholder: 'Ex: 0.5' },
      { id: 'limitare_raspundere', label: 'Limitarea răspunderii', type: 'select', required: false, options: ['Limitată la valoarea contractului', 'Limitată la 2x valoarea contractului', 'Nelimitată'] },
    ]
  },
  {
    id: 'contract-colaborare',
    name: 'Contract de Colaborare',
    description: 'Contract colaborare între PFA-uri sau microîntreprinderi',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'parte1_nume', label: 'Partea I - Denumire', type: 'text', required: true, placeholder: 'Ex: Ion Popescu PFA' },
      { id: 'parte1_cui', label: 'Partea I - CUI', type: 'text', required: true },
      { id: 'parte1_adresa', label: 'Partea I - Adresă', type: 'textarea', required: true },
      { id: 'parte2_nume', label: 'Partea II - Denumire', type: 'text', required: true, placeholder: 'Ex: Maria Ionescu SRL' },
      { id: 'parte2_cui', label: 'Partea II - CUI', type: 'text', required: true },
      { id: 'parte2_adresa', label: 'Partea II - Adresă', type: 'textarea', required: true },
      { id: 'obiect', label: 'Obiectul colaborării', type: 'textarea', required: true },
      { id: 'durata', label: 'Durata colaborării', type: 'select', required: true, options: ['3 luni', '6 luni', '12 luni', 'Nedeterminată'] },
      { id: 'distributie_venituri', label: 'Distribuția veniturilor (%)', type: 'text', required: true, placeholder: 'Ex: 60% Partea I, 40% Partea II' },
    ]
  },
  {
    id: 'contract-agent-imobiliar',
    name: 'Contract Agent Imobiliar',
    description: 'Contract de intermediere imobiliară între agent și client',
    category: 'agenti',
    price: 15,
    fields: [
      { id: 'agentie_nume', label: 'Denumirea agenției', type: 'text', required: true, placeholder: 'Ex: Real Estate Pro SRL' },
      { id: 'agentie_cui', label: 'CUI agenție', type: 'text', required: true },
      { id: 'agent_nume', label: 'Numele agentului', type: 'text', required: true },
      { id: 'client_nume', label: 'Numele clientului', type: 'text', required: true },
      { id: 'client_cnp', label: 'CNP client', type: 'text', required: true },
      { id: 'client_adresa', label: 'Adresa client', type: 'textarea', required: true },
      { id: 'client_telefon', label: 'Telefon client', type: 'phone', required: true },
      { id: 'tip_tranzactie', label: 'Tipul tranzacției', type: 'select', required: true, options: ['Vânzare', 'Cumpărare', 'Închiriere', 'Subînchiriere'] },
      { id: 'descriere_proprietate', label: 'Descrierea proprietății', type: 'textarea', required: true, placeholder: 'Tip, suprafață, zonă, caracteristici' },
      { id: 'pret_estimat', label: 'Prețul estimat (EUR)', type: 'number', required: false },
      { id: 'comision', label: 'Comisionul agenției (%)', type: 'number', required: true, placeholder: 'Ex: 3' },
      { id: 'durata_mandat', label: 'Durata mandatului (luni)', type: 'number', required: true, placeholder: 'Ex: 3' },
      { id: 'exclusivitate', label: 'Exclusivitate agenție', type: 'select', required: true, options: ['Fără exclusivitate (clientul poate colabora cu mai multe agenții)', 'Cu exclusivitate (clientul colaborează exclusiv cu această agenție)'] },
      { id: 'comision_tranzactie_directa', label: 'Comision tranzacție directă (%)', type: 'number', required: false, placeholder: 'Comision dacă clientul tranzacționează direct (Ex: 1.5)' },
    ]
  },
  {
    id: 'contract-agent-asigurari',
    name: 'Contract Agent Asigurări',
    description: 'Contract de intermediere în asigurări',
    category: 'agenti',
    price: 15,
    fields: [
      { id: 'broker_nume', label: 'Broker/Companie asigurări', type: 'text', required: true },
      { id: 'broker_cui', label: 'CUI broker', type: 'text', required: true },
      { id: 'agent_nume', label: 'Numele agentului', type: 'text', required: true },
      { id: 'client_nume', label: 'Numele clientului', type: 'text', required: true },
      { id: 'client_cnp', label: 'CNP/CUI client', type: 'text', required: true },
      { id: 'tip_asigurare', label: 'Tipul asigurării', type: 'select', required: true, options: ['RCA', 'CASCO', 'Asigurare de viață', 'Asigurare locuință', 'Asigurare de sănătate', 'Asigurare de călătorie'] },
      { id: 'prima_asigurare', label: 'Prima de asigurare (RON/an)', type: 'number', required: true },
      { id: 'perioada', label: 'Perioada asigurată', type: 'select', required: true, options: ['1 an', '2 ani', '5 ani', '10 ani', 'Nedeterminat'] },
    ]
  },
  {
    id: 'acord-confidentialitate',
    name: 'Acord de Confidențialitate (NDA)',
    description: 'NDA standard pentru protejarea informațiilor confidențiale',
    category: 'general',
    price: 15,
    fields: [
      { id: 'divulgator_nume', label: 'Divulgatorul (cel care dezvăluie)', type: 'text', required: true },
      { id: 'divulgator_cui', label: 'CUI/CNP divulgator', type: 'text', required: true },
      { id: 'destinatar_nume', label: 'Destinatarul informațiilor', type: 'text', required: true },
      { id: 'destinatar_cui', label: 'CUI/CNP destinatar', type: 'text', required: true },
      { id: 'obiect_confidential', label: 'Tipul informațiilor confidențiale', type: 'textarea', required: true, placeholder: 'Ex: date financiare, cod sursă, strategie de business, lista de clienți' },
      { id: 'scop', label: 'Scopul divulgării', type: 'textarea', required: true, placeholder: 'Ex: evaluarea unui parteneriat de business' },
      { id: 'durata_confidentialitate', label: 'Durata obligației de confidențialitate', type: 'select', required: true, options: ['1 an', '2 ani', '3 ani', '5 ani', 'Nedeterminat'] },
      { id: 'clauza_penalitate', label: 'Penalitate pentru nerespectare (RON)', type: 'number', required: false, placeholder: 'Ex: 10000' },
    ]
  },
  {
    id: 'contract-vanzare-cumparare',
    name: 'Contract Vânzare-Cumpărare',
    description: 'Contract de vânzare pentru bunuri mobile (echipamente, marfă)',
    category: 'general',
    price: 15,
    fields: [
      { id: 'vanzator_nume', label: 'Vânzătorul', type: 'text', required: true },
      { id: 'vanzator_cui', label: 'CUI/CNP vânzător', type: 'text', required: true },
      { id: 'cumparator_nume', label: 'Cumpărătorul', type: 'text', required: true },
      { id: 'cumparator_cui', label: 'CUI/CNP cumpărător', type: 'text', required: true },
      { id: 'descriere_bun', label: 'Descrierea bunului', type: 'textarea', required: true, placeholder: 'Tip, model, serie, caracteristici' },
      { id: 'pret', label: 'Prețul de vânzare (RON)', type: 'number', required: true },
      { id: 'modalitate_plata', label: 'Modalitatea de plată', type: 'select', required: true, options: ['Numerar', 'Transfer bancar', 'Card', 'Rate', 'Parțial avans'] },
      { id: 'data_predare', label: 'Data predării bunului', type: 'date', required: true },
      { id: 'locul_predarii', label: 'Locul predării', type: 'text', required: true },
    ]
  },
  {
    id: 'contract-inchiriere',
    name: 'Contract de Închiriere',
    description: 'Contract de închiriere pentru spații comerciale sau echipamente',
    category: 'general',
    price: 15,
    fields: [
      { id: 'locator_nume', label: 'Locatorul (proprietarul)', type: 'text', required: true },
      { id: 'locator_cui', label: 'CUI/CNP locator', type: 'text', required: true },
      { id: 'locatar_nume', label: 'Locatarul (chiriașul)', type: 'text', required: true },
      { id: 'locatar_cui', label: 'CUI/CNP locatar', type: 'text', required: true },
      { id: 'descriere_spatiu', label: 'Descrierea spațiului/bunului', type: 'textarea', required: true },
      { id: 'adresa', label: 'Adresa/Locația', type: 'textarea', required: true },
      { id: 'suprafata', label: 'Suprafața (mp)', type: 'number', required: false },
      { id: 'chirie_lunara', label: 'Chiria lunară (RON)', type: 'number', required: true },
      { id: 'data_inceput', label: 'Data de început', type: 'date', required: true },
      { id: 'durata', label: 'Durata contractului', type: 'select', required: true, options: ['1 an', '2 ani', '3 ani', '5 ani', 'Nedeterminată'] },
      { id: 'garantie', label: 'Garanție (luni de chirie)', type: 'number', required: false, placeholder: 'Ex: 2' },
      { id: 'garantie_inventar', label: 'Inventar spațiu', type: 'select', required: false, options: ['Da, se atașează inventar semnat', 'Nu'] },
      { id: 'indexare_chirie', label: 'Indexare chirie', type: 'select', required: false, options: ['Fără indexare', 'Indexare anuală la inflație (IPC)', 'La acordul ambelor părți'] },
      { id: 'reziliere_preaviz_zile', label: 'Preaviz reziliere (zile)', type: 'number', required: false, placeholder: 'Ex: 30' },
      { id: 'titlu_executoriu', label: 'Titlu executoriu', type: 'select', required: false, options: ['Da, contractul constituie titlu executoriu (necesită autentificare notarială)', 'Nu'] },
      { id: 'reparatii_minore_pana_la', label: 'Reparații minore în sarcina chiriașului (RON)', type: 'number', required: false, placeholder: 'Ex: 200' },
    ]
  },
  {
    id: 'contract-consultanta',
    name: 'Contract de Consultanță',
    description: 'Contract pentru servicii de consultanță (juridică, fiscală, IT, management)',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'consultant_nume', label: 'Consultantul', type: 'text', required: true },
      { id: 'consultant_cui', label: 'CUI/CNP consultant', type: 'text', required: true },
      { id: 'client_nume', label: 'Clientul', type: 'text', required: true },
      { id: 'client_cui', label: 'CUI/CNP client', type: 'text', required: true },
      { id: 'domeniu', label: 'Domeniul consultanței', type: 'select', required: true, options: ['IT & Tehnologie', 'Financiar-contabil', 'Juridic', 'Management', 'Marketing', 'HR', 'Alt domeniu'] },
      { id: 'descriere_servicii', label: 'Descrierea serviciilor', type: 'textarea', required: true },
      { id: 'tarif', label: 'Tariful', type: 'number', required: true, placeholder: 'Ex: 100' },
      { id: 'tip_tarif', label: 'Tipul tarifului', type: 'select', required: true, options: ['RON/oră', 'EUR/oră', 'RON/zi', 'EUR/zi', 'RON/lună', 'EUR/lună', 'Forfetar RON', 'Forfetar EUR'] },
      { id: 'durata', label: 'Durata contractului', type: 'select', required: true, options: ['1 lună', '3 luni', '6 luni', '12 luni', 'Nedeterminată'] },
    ]
  },

  {
    id: 'acord-gdpr',
    name: 'Acord Prelucrare Date (GDPR)',
    description: 'Acord obligatoriu pentru colectarea și prelucrarea datelor personale ale clienților',
    category: 'general' as const,
    price: 15,
    fields: [
      { id: 'operator_nume', label: 'Operatorul (firma ta)', type: 'text' as const, required: true },
      { id: 'operator_cui', label: 'CUI operator', type: 'text' as const, required: true },
      { id: 'operator_adresa', label: 'Adresa operatorului', type: 'textarea' as const, required: true },
      { id: 'persoana_vizata', label: 'Persoana vizată (client/angajat/etc)', type: 'text' as const, required: true },
      { id: 'scop_prelucrare', label: 'Scopul prelucrării datelor', type: 'textarea' as const, required: true, placeholder: 'Ex: facturare, livrare produse, marketing cu consimțământ' },
      { id: 'categorii_date', label: 'Categoriile de date prelucrate', type: 'textarea' as const, required: true, placeholder: 'Ex: nume, email, telefon, adresă, CNP' },
      { id: 'durata_retentie', label: 'Durata retenției datelor', type: 'select' as const, required: true, options: ['1 an', '3 ani', '5 ani', '10 ani', 'Pe durata relației contractuale + 3 ani'] },
    ]
  },
  {
    id: 'contract-telemunca',
    name: 'Contract Telemuncă',
    description: 'Act adițional sau contract pentru munca desfășurată de acasă (remote/hybrid)',
    category: 'general' as const,
    price: 15,
    fields: [
      { id: 'angajator_nume', label: 'Angajatorul', type: 'text' as const, required: true },
      { id: 'angajator_cui', label: 'CUI angajator', type: 'text' as const, required: true },
      { id: 'angajat_nume', label: 'Angajatul', type: 'text' as const, required: true },
      { id: 'angajat_cnp', label: 'CNP angajat', type: 'text' as const, required: true },
      { id: 'functia', label: 'Funcția/Postul', type: 'text' as const, required: true, placeholder: 'Ex: Programator, Designer, Contabil' },
      { id: 'locatie_telemunca', label: 'Locația telemuncii', type: 'text' as const, required: true, placeholder: 'Ex: domiciliul angajatului din Cluj-Napoca' },
      { id: 'program_lucru', label: 'Programul de lucru', type: 'text' as const, required: true, placeholder: 'Ex: 09:00-17:00, Luni-Vineri' },
      { id: 'zile_telemunca', label: 'Zile telemuncă/săptămână', type: 'select' as const, required: true, options: ['1 zi/săptămână', '2 zile/săptămână', '3 zile/săptămână', '4 zile/săptămână', '5 zile/săptămână (full remote)'] },
      { id: 'echipamente', label: 'Echipamente furnizate de angajator', type: 'textarea' as const, required: false, placeholder: 'Ex: laptop, monitor, tastatura (sau "angajatul folosește echipamente proprii")' },
      { id: 'data_incepere', label: 'Data începerii telemuncii', type: 'date' as const, required: true },
    ]
  },
  {
    id: 'antecontract-vanzare',
    name: 'Antecontract Vânzare-Cumpărare',
    description: 'Promisiune bilaterală de vânzare pentru imobile sau bunuri de valoare mare',
    category: 'agenti' as const,
    price: 15,
    fields: [
      { id: 'promitent_vanzator', label: 'Promitentul-vânzător', type: 'text' as const, required: true },
      { id: 'vanzator_cnp', label: 'CNP/CUI promitent-vânzător', type: 'text' as const, required: true },
      { id: 'promitent_cumparator', label: 'Promitentul-cumpărător', type: 'text' as const, required: true },
      { id: 'cumparator_cnp', label: 'CNP/CUI promitent-cumpărător', type: 'text' as const, required: true },
      { id: 'descriere_bun', label: 'Descrierea bunului promis', type: 'textarea' as const, required: true, placeholder: 'Ex: Apartament 3 camere, str. X nr. Y, Cluj-Napoca, CF nr. ...' },
      { id: 'pret_vanzare', label: 'Prețul de vânzare convenit (EUR)', type: 'number' as const, required: true },
      { id: 'avans', label: 'Avansul achitat la semnare (EUR)', type: 'number' as const, required: true },
      { id: 'termen_perfectare', label: 'Termenul de perfectare a vânzării', type: 'date' as const, required: true },
      { id: 'penalitate', label: 'Penalitate nerespectare (dublu avans)', type: 'select' as const, required: true, options: ['Da, se aplică (standard)', 'Nu se aplică'] },
    ]
  },
  {
    id: 'contract-mandat',
    name: 'Contract de Mandat',
    description: 'Împuternicire legală pentru a reprezenta o persoană sau firmă în fața terților',
    category: 'general',
    price: 15,
    fields: [
      { id: 'mandant_nume', label: 'Mandantul (cel care dă împuternicirea)', type: 'text', required: true, placeholder: 'Ex: ABC SRL' },
      { id: 'mandant_cui', label: 'CUI/CNP mandant', type: 'text', required: true },
      { id: 'mandant_adresa', label: 'Adresa mandantului', type: 'textarea', required: true },
      { id: 'mandant_reprezentant', label: 'Reprezentant legal mandant', type: 'text', required: false, placeholder: 'Dacă e firmă' },
      { id: 'mandatar_nume', label: 'Mandatarul (cel care primește împuternicirea)', type: 'text', required: true },
      { id: 'mandatar_cui', label: 'CUI/CNP mandatar', type: 'text', required: true },
      { id: 'mandatar_adresa', label: 'Adresa mandatarului', type: 'textarea', required: true },
      { id: 'obiect_mandat', label: 'Ce poate face mandatarul în numele tău?', type: 'textarea', required: true, placeholder: 'Ex: să semneze contracte, să reprezinte firma la ANAF, să încaseze sume...' },
      { id: 'puteri_acordate', label: 'Puteri specifice acordate', type: 'textarea', required: true, placeholder: 'Ex: semnare acte, negociere contracte, reprezentare în instanță...' },
      { id: 'data_start', label: 'Data de start', type: 'date', required: true },
      { id: 'data_sfarsit', label: 'Data de expirare', type: 'date', required: true },
      { id: 'remuneratie', label: 'Remunerație (RON) — lasă gol dacă e gratuit', type: 'number', required: false },
    ]
  },
  {
    id: 'contract-subcontractare',
    name: 'Contract de Subcontractare',
    description: 'Pentru când subcontractezi o parte dintr-un proiect unui alt freelancer sau firmă',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'contractor_nume', label: 'Contractor principal (tu)', type: 'text', required: true, placeholder: 'Ex: Ion Popescu PFA' },
      { id: 'contractor_cui', label: 'CUI/CNP contractor', type: 'text', required: true },
      { id: 'contractor_adresa', label: 'Adresa contractor', type: 'textarea', required: true },
      { id: 'subcontractor_nume', label: 'Subcontractor (cel angajat)', type: 'text', required: true },
      { id: 'subcontractor_cui', label: 'CUI/CNP subcontractor', type: 'text', required: true },
      { id: 'subcontractor_adresa', label: 'Adresa subcontractor', type: 'textarea', required: true },
      { id: 'descriere_servicii', label: 'Ce servicii sunt subcontractate?', type: 'textarea', required: true },
      { id: 'valoare', label: 'Valoarea subcontractului', type: 'number', required: true },
      { id: 'moneda', label: 'Moneda', type: 'select', required: true, options: ['RON', 'EUR', 'USD'] },
      { id: 'termene_plata', label: 'Termene de plată', type: 'text', required: false, placeholder: 'Ex: 30 de zile de la livrare' },
      { id: 'data_start', label: 'Data de start', type: 'date', required: true },
      { id: 'data_sfarsit', label: 'Termen de finalizare', type: 'date', required: true },
    ]
  },
  {
    id: 'acord-parteneriat',
    name: 'Acord de Parteneriat',
    description: 'Colaborare între doi freelanceri, PFA-uri sau firme pe un proiect comun',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'partener1_nume', label: 'Partener 1', type: 'text', required: true },
      { id: 'partener1_cui', label: 'CUI/CNP Partener 1', type: 'text', required: true },
      { id: 'partener1_adresa', label: 'Adresa Partener 1', type: 'textarea', required: true },
      { id: 'partener2_nume', label: 'Partener 2', type: 'text', required: true },
      { id: 'partener2_cui', label: 'CUI/CNP Partener 2', type: 'text', required: true },
      { id: 'partener2_adresa', label: 'Adresa Partener 2', type: 'textarea', required: true },
      { id: 'scop_parteneriat', label: 'Scopul parteneriatului / proiectul comun', type: 'textarea', required: true },
      { id: 'contributie_p1', label: 'Contribuția Partenerului 1', type: 'textarea', required: true, placeholder: 'Ex: design, front-end, 40h/lună' },
      { id: 'contributie_p2', label: 'Contribuția Partenerului 2', type: 'textarea', required: true, placeholder: 'Ex: back-end, DevOps, 40h/lună' },
      { id: 'impartire_venituri', label: 'Împărțirea veniturilor', type: 'text', required: true, placeholder: 'Ex: 50/50 sau 60% P1 / 40% P2' },
      { id: 'data_start', label: 'Data de start', type: 'date', required: true },
      { id: 'data_sfarsit', label: 'Data de finalizare estimată', type: 'date', required: false },
      { id: 'distribuire_profit', label: 'Distribuire profit (detalii)', type: 'text', required: false, placeholder: 'Ex: 50/50, sau proporțional cu contribuțiile' },
      { id: 'non_compete_durata', label: 'Clauza de non-compete', type: 'select', required: false, options: ['Fără non-compete', '6 luni', '1 an', '2 ani'] },
      { id: 'mecanism_exit', label: 'Mecanismul de ieșire din parteneriat', type: 'textarea', required: false, placeholder: 'Ex: Partenerul care iese cedează drepturile, celălalt plătește valoarea contribuției evaluate...' },
      { id: 'deadlock_rezolvare', label: 'Rezolvare blocaj decizional (deadlock)', type: 'select', required: false, options: ['Mediator agreat', 'Unul dintre parteneri are drept de veto final', 'Lichidare parteneriat'] },
    ]
  },
  {
    id: 'contract-servicii-it',
    name: 'Contract Servicii IT Complet',
    description: 'Contract detaliat pentru proiecte IT complexe — include proprietate intelectuală, garanție, scope management',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'prestator_nume', label: 'Prestatorul (tu)', type: 'text', required: true, placeholder: 'Ex: Ion Popescu PFA' },
      { id: 'prestator_cui', label: 'CUI/CNP prestator', type: 'text', required: true },
      { id: 'prestator_adresa', label: 'Adresa prestatorului', type: 'textarea', required: true },
      { id: 'beneficiar_nume', label: 'Beneficiarul (clientul)', type: 'text', required: true },
      { id: 'beneficiar_cui', label: 'CUI/CNP beneficiar', type: 'text', required: false },
      { id: 'beneficiar_adresa', label: 'Adresa beneficiarului', type: 'textarea', required: false },
      { id: 'descriere_servicii', label: 'Descrierea serviciilor IT', type: 'textarea', required: true, placeholder: 'Ex: Dezvoltare aplicație web, design UI/UX, integrare API...' },
      { id: 'deliverabile', label: 'Deliverabile concrete', type: 'textarea', required: true, placeholder: 'Ex: cod sursă, documentație tehnică, 3 runde de revizii...' },
      { id: 'valoare', label: 'Valoarea contractului', type: 'number', required: true },
      { id: 'moneda', label: 'Moneda', type: 'select', required: true, options: ['EUR', 'RON', 'USD'] },
      { id: 'avans', label: 'Avans (%)', type: 'number', required: false, placeholder: 'Ex: 30' },
      { id: 'data_start', label: 'Data de start', type: 'date', required: true },
      { id: 'data_sfarsit', label: 'Data de livrare', type: 'date', required: true },
      { id: 'zile_acceptanta', label: 'Zile pentru acceptanță livrabile', type: 'number', required: false, placeholder: 'Default: 5 zile' },
      { id: 'garantie', label: 'Perioadă garanție', type: 'select', required: false, options: ['14 zile', '30 de zile', '60 de zile', '90 de zile'] },
      { id: 'durata_confidentialitate', label: 'Durata clauzei de confidențialitate', type: 'select', required: false, options: ['1 an', '2 ani', '3 ani', '5 ani', 'Nedeterminat'] },
    ]
  },
  {
    id: 'contract-mentenanta-it',
    name: 'Contract Mentenanță IT',
    description: 'Contract pentru mentenanța lunară a site-urilor, aplicațiilor și infrastructurii IT',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'prestator_nume', label: 'Prestatorul (firma/PFA ta)', type: 'text', required: true, placeholder: 'Ex: IT Solutions PFA' },
      { id: 'prestator_cui', label: 'CUI/CNP prestator', type: 'text', required: true },
      { id: 'prestator_adresa', label: 'Adresa prestatorului', type: 'textarea', required: true },
      { id: 'client_nume', label: 'Clientul (beneficiarul)', type: 'text', required: true },
      { id: 'client_cui', label: 'CUI/CNP client', type: 'text', required: true },
      { id: 'client_adresa', label: 'Adresa clientului', type: 'textarea', required: true },
      { id: 'sisteme_mentinute', label: 'Sistemele/aplicațiile supuse mentenanței', type: 'textarea', required: true, placeholder: 'Ex: Site WordPress happy-nest.ro, server VPS Hetzner, aplicație CRM intern' },
      { id: 'servicii_incluse', label: 'Servicii incluse în mentenanță', type: 'textarea', required: true, placeholder: 'Ex: update-uri WordPress, backup zilnic, monitorizare uptime, remediere bug-uri' },
      { id: 'timp_raspuns', label: 'Timp de răspuns garantat', type: 'select', required: true, options: ['2 ore (urgente)', '4 ore (urgente)', '24 ore (normale)', '48 ore (normale)', 'Best effort'] },
      { id: 'tarif_lunar', label: 'Tariful lunar de mentenanță (RON)', type: 'number', required: true, placeholder: 'Ex: 500' },
      { id: 'ore_incluse', label: 'Ore incluse/lună', type: 'number', required: false, placeholder: 'Ex: 5' },
      { id: 'tarif_extra', label: 'Tariful pentru ore suplimentare (RON/oră)', type: 'number', required: false, placeholder: 'Ex: 150' },
      { id: 'data_start', label: 'Data de start', type: 'date', required: true },
      { id: 'durata', label: 'Durata contractului', type: 'select', required: true, options: ['3 luni', '6 luni', '12 luni', 'Nedeterminată'] },
      { id: 'sla_raspuns_ore', label: 'Timp răspuns incident critic (ore)', type: 'number', required: false, placeholder: 'Ex: 4' },
      { id: 'sla_rezolvare_ore', label: 'Timp rezolvare incident critic (ore)', type: 'number', required: false, placeholder: 'Ex: 24' },
      { id: 'proprietate_cod', label: 'Proprietatea codului sursă', type: 'select', required: false, options: ['Codul aparține clientului', 'Codul aparține prestatorului', 'Cod partajat - licență reciprocă'] },
      { id: 'backup_frecventa', label: 'Frecvența backup', type: 'select', required: false, options: ['Zilnic', 'Săptămânal', 'Lunar', 'Nu e inclus'] },
    ]
  },
  {
    id: 'contract-evenimente',
    name: 'Contract Organizare Evenimente',
    description: 'Contract pentru organizarea de evenimente (corporate, petreceri, conferințe, nunți)',
    category: 'general',
    price: 15,
    fields: [
      { id: 'organizator_nume', label: 'Organizatorul (firma/PFA)', type: 'text', required: true, placeholder: 'Ex: Event Pro SRL' },
      { id: 'organizator_cui', label: 'CUI organizator', type: 'text', required: true },
      { id: 'organizator_adresa', label: 'Adresa organizatorului', type: 'textarea', required: true },
      { id: 'client_nume', label: 'Clientul (beneficiarul evenimentului)', type: 'text', required: true },
      { id: 'client_cnp', label: 'CNP/CUI client', type: 'text', required: true },
      { id: 'client_telefon', label: 'Telefon contact client', type: 'phone', required: true },
      { id: 'tip_eveniment', label: 'Tipul evenimentului', type: 'select', required: true, options: ['Petrecere privată', 'Eveniment corporate', 'Conferință/Seminar', 'Nuntă', 'Botez', 'Aniversare', 'Team Building', 'Alt eveniment'] },
      { id: 'descriere_eveniment', label: 'Descrierea evenimentului și serviciilor incluse', type: 'textarea', required: true, placeholder: 'Ex: Organizare petrecere copii 5-7 ani, 30 invitați, decor tematic Frozen, animatori 3h' },
      { id: 'data_eveniment', label: 'Data evenimentului', type: 'date', required: true },
      { id: 'ora_inceput', label: 'Ora de începere', type: 'text', required: true, placeholder: 'Ex: 15:00' },
      { id: 'durata_ore', label: 'Durata (ore)', type: 'number', required: true, placeholder: 'Ex: 3' },
      { id: 'locatie', label: 'Locația evenimentului', type: 'text', required: true, placeholder: 'Ex: Happy Nest, str. X nr. Y, Cluj-Napoca' },
      { id: 'nr_persoane', label: 'Numărul de participanți', type: 'number', required: true, placeholder: 'Ex: 30' },
      { id: 'pret_total', label: 'Prețul total (RON)', type: 'number', required: true },
      { id: 'avans', label: 'Avans la rezervare (RON)', type: 'number', required: true, placeholder: 'Ex: 500' },
      { id: 'termen_plata_rest', label: 'Termenul plății restului', type: 'select', required: true, options: ['La data evenimentului', 'Cu 7 zile înainte', 'Cu 3 zile înainte', 'Cu 24 ore înainte'] },
    ]
  },
  {
    id: 'contract-fotograf',
    name: 'Contract Servicii Fotografie',
    description: 'Contract pentru servicii foto/video la evenimente, sesiuni foto, proiecte comerciale',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'fotograf_nume', label: 'Fotograful/Videograful', type: 'text', required: true, placeholder: 'Ex: Andrei Pop Foto PFA' },
      { id: 'fotograf_cui', label: 'CUI/CNP fotograf', type: 'text', required: true },
      { id: 'fotograf_adresa', label: 'Adresa fotografului', type: 'textarea', required: true },
      { id: 'client_nume', label: 'Clientul', type: 'text', required: true },
      { id: 'client_cnp', label: 'CNP/CUI client', type: 'text', required: true },
      { id: 'client_telefon', label: 'Telefon client', type: 'phone', required: true },
      { id: 'tip_sesiune', label: 'Tipul sesiunii/evenimentului', type: 'select', required: true, options: ['Nuntă', 'Botez', 'Aniversare/Petrecere', 'Sesiune foto portret', 'Sesiune foto produs/comercial', 'Eveniment corporate', 'Maternitate/Familie', 'Alt tip'] },
      { id: 'data_sesiune', label: 'Data sesiunii', type: 'date', required: true },
      { id: 'ora_inceput', label: 'Ora de start', type: 'text', required: true, placeholder: 'Ex: 14:00' },
      { id: 'durata_ore', label: 'Durata (ore)', type: 'number', required: true, placeholder: 'Ex: 4' },
      { id: 'locatie', label: 'Locația sesiunii', type: 'text', required: true },
      { id: 'servicii_incluse', label: 'Servicii incluse', type: 'textarea', required: true, placeholder: 'Ex: Fotografiere 4h, editare 100 foto livrate în 2 săptămâni, galerie online privată' },
      { id: 'nr_foto_livrate', label: 'Număr fotografii livrate (minim)', type: 'number', required: false, placeholder: 'Ex: 100' },
      { id: 'termen_livrare_zile', label: 'Termenul de livrare (zile de la sesiune)', type: 'number', required: true, placeholder: 'Ex: 14' },
      { id: 'format_livrare', label: 'Formatul de livrare', type: 'select', required: true, options: ['JPEG editare profesională', 'RAW + JPEG', 'Galerie online', 'USB + galerie online', 'Album foto tipărit'] },
      { id: 'pret', label: 'Prețul total (RON)', type: 'number', required: true },
      { id: 'avans', label: 'Avans la semnare (RON)', type: 'number', required: true, placeholder: 'Ex: 300' },
      { id: 'drepturi_publicare', label: 'Fotograful poate publica imaginile în portofoliu?', type: 'select', required: true, options: ['Da, cu acordul clientului', 'Da, fără restricții', 'Nu, utilizare exclusivă client'] },
    ]
  },
  {
    id: 'contract-traducator',
    name: 'Contract Servicii Traducere',
    description: 'Contract pentru traduceri autorizate sau neautorizate, interpretariat, localizare',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'traducator_nume', label: 'Traducătorul/Firma de traduceri', type: 'text', required: true, placeholder: 'Ex: Maria Ionescu Traduceri PFA' },
      { id: 'traducator_cui', label: 'CUI/CNP traducător', type: 'text', required: true },
      { id: 'traducator_adresa', label: 'Adresa traducătorului', type: 'textarea', required: true },
      { id: 'client_nume', label: 'Clientul (beneficiarul)', type: 'text', required: true },
      { id: 'client_cui', label: 'CUI/CNP client', type: 'text', required: true },
      { id: 'client_adresa', label: 'Adresa clientului', type: 'textarea', required: true },
      { id: 'tip_serviciu', label: 'Tipul serviciului', type: 'select', required: true, options: ['Traducere simplă', 'Traducere autorizată (legalizată)', 'Interpretariat simultan', 'Interpretariat consecutiv', 'Localizare software/website', 'Transcriere audio/video'] },
      { id: 'limba_sursa', label: 'Limba sursă (din care se traduce)', type: 'text', required: true, placeholder: 'Ex: Română' },
      { id: 'limba_tinta', label: 'Limba țintă (în care se traduce)', type: 'text', required: true, placeholder: 'Ex: Engleză' },
      { id: 'descriere_document', label: 'Descrierea documentului/materialului de tradus', type: 'textarea', required: true, placeholder: 'Ex: Contract comercial 12 pagini, 3.500 cuvinte; Certificate de naștere (3 buc)' },
      { id: 'nr_pagini_cuvinte', label: 'Volum (pagini sau cuvinte)', type: 'text', required: false, placeholder: 'Ex: 12 pagini / 3.500 cuvinte' },
      { id: 'termen_livrare', label: 'Termenul de livrare', type: 'date', required: true },
      { id: 'format_livrare', label: 'Formatul de livrare', type: 'select', required: true, options: ['Document Word/PDF electronic', 'Document tipărit', 'Document tipărit + electronic', 'Traducere autorizată cu ștampilă'] },
      { id: 'pret', label: 'Prețul total (RON)', type: 'number', required: true },
      { id: 'modalitate_plata', label: 'Modalitatea de plată', type: 'select', required: true, options: ['Integral la livrare', 'Avans 50% + rest la livrare', 'Transfer bancar', 'Numerar la livrare'] },
    ]
  },
  {
    id: 'cesiune-drepturi-autor',
    name: 'Cesiune Drepturi de Autor',
    description: 'Cesiunea drepturilor patrimoniale pentru creații: software, design, conținut, muzică',
    category: 'freelancer' as const,
    price: 15,
    fields: [
      { id: 'cedent_nume', label: 'Cedentul (creatorul)', type: 'text' as const, required: true },
      { id: 'cedent_cnp', label: 'CNP/CUI cedent', type: 'text' as const, required: true },
      { id: 'cesionar_nume', label: 'Cesionarul (beneficiarul)', type: 'text' as const, required: true },
      { id: 'cesionar_cui', label: 'CUI cesionar', type: 'text' as const, required: true },
      { id: 'descriere_opera', label: 'Descrierea operei/creației', type: 'textarea' as const, required: true, placeholder: 'Ex: Aplicație software "X", cod sursă în Python/React; Design logo "Brand Y"; Articole blog (10 articole)' },
      { id: 'tip_cesiune', label: 'Tipul cesiunii', type: 'select' as const, required: true, options: ['Exclusivă (cedentul nu mai poate folosi opera)', 'Neexclusivă (cedentul păstrează dreptul de utilizare)'] },
      { id: 'teritoriu', label: 'Teritoriul', type: 'select' as const, required: true, options: ['Teritoriul României', 'Uniunea Europeană', 'Mondial'] },
      { id: 'durata', label: 'Durata cesiunii', type: 'select' as const, required: true, options: ['1 an', '3 ani', '5 ani', '10 ani', 'Toată durata drepturilor de autor (70 ani de la creație)'] },
      { id: 'pret_cesiune', label: 'Prețul cesiunii (RON)', type: 'number' as const, required: true },
      { id: 'teritoriu_cesiune', label: 'Teritoriul cesiunii', type: 'select' as const, required: false, options: ['România', 'Uniunea Europeană', 'Mondial'] },
      { id: 'durata_cesiune', label: 'Durata cesiunii', type: 'select' as const, required: false, options: ['1 an', '3 ani', '5 ani', 'Nelimitată (pe durata protecției legale)'] },
      { id: 'opere_viitoare', label: 'Opere viitoare', type: 'select' as const, required: false, options: ['Nu (doar opera specificată)', 'Da, cu act adițional separat per operă'] },
      { id: 'drept_modificare', label: 'Dreptul de modificare/adaptare', type: 'select' as const, required: false, options: ['Da, poate modifica/adapta opera', 'Nu, opera se folosește ca atare'] },
      { id: 'atribuire_autor', label: 'Atribuire autor', type: 'select' as const, required: false, options: ['Da, autorul este menționat public', 'Nu, utilizare anonimă'] },
    ]
  },
]

export function getContractById(id: string): ContractType | undefined {
  return CONTRACT_TYPES.find(c => c.id === id)
}

export function generateContractText(contract: ContractType, data: Record<string, string>): string {
  const today = new Date().toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })
  const contractNumber = `CR-${Date.now().toString().slice(-6)}`

  if (contract.id === 'contract-prestari-servicii') {
    return `CONTRACT DE PRESTĂRI SERVICII
Nr. ${contractNumber} / ${today}

I. PĂRȚILE CONTRACTANTE

PRESTATOR: ${data.prestator_nume}
CUI: ${data.prestator_cui}
Adresa: ${data.prestator_adresa}

BENEFICIAR: ${data.beneficiar_nume}
CUI: ${data.beneficiar_cui}
Adresa: ${data.beneficiar_adresa}

II. OBIECTUL CONTRACTULUI

Prestatorul se obligă să execute pentru Beneficiar următoarele servicii:
${data.obiect_contract}

III. VALOAREA CONTRACTULUI

Valoarea totală a contractului este de ${data.valoare} ${data.moneda || 'RON'}, fără TVA (dacă este cazul).

IV. TERMENUL DE LIVRARE

Termenul de livrare/finalizare este: ${data.termen_livrare}

V. MODALITATEA DE PLATĂ

Plata se va efectua în termen de ${data.termen_plata} zile de la livrarea și acceptarea serviciilor, prin transfer bancar sau altă modalitate agreată de comun acord.

VI. OBLIGAȚIILE PRESTATORULUI

a) Să execute serviciile conform specificațiilor convenite;
b) Să respecte termenele stabilite;
c) Să informeze Beneficiarul despre eventualele impedimente;
d) Să păstreze confidențialitatea informațiilor Beneficiarului.

VII. OBLIGAȚIILE BENEFICIARULUI

a) Să achite contravaloarea serviciilor la termenele stabilite;
b) Să pună la dispoziția Prestatorului informațiile necesare;
c) Să colaboreze cu Prestatorul pentru buna desfășurare a contractului.

VIII. ACCEPTAREA LIVRABILELOR

Beneficiarul are ${data.acceptare_livrabil_zile || '5'} zile de la livrare să accepte sau să respingă motivat livrabilul. Lipsa oricărui răspuns în termenul menționat constituie acceptare tacită.

IX. RĂSPUNDEREA CONTRACTUALĂ

Nerespectarea obligațiilor de plată atrage penalități de ${data.penalitate_intarziere_plata || '0,1'}% pe zi de întârziere din suma datorată, aplicabile de ambele părți (inclusiv pentru plata cu întârziere a penalităților de către Prestator, dacă este cazul).

Limitarea răspunderii: ${data.limitare_raspundere || 'Limitată la valoarea contractului'}. Niciuna dintre părți nu răspunde pentru daune indirecte sau pierderi de profit.

X. FORȚA MAJORĂ

Niciuna dintre părți nu răspunde pentru neexecutarea obligațiilor cauzată de forță majoră, conform legii.

XI. LITIGII

Litigiile se rezolvă pe cale amiabilă sau, dacă nu este posibil, prin instanțele judecătorești competente din România.

XII. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 (două) exemplare originale, câte unul pentru fiecare parte.

PRESTATOR                                    BENEFICIAR

${data.prestator_nume}                       ${data.beneficiar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'acord-confidentialitate') {
    return `ACORD DE CONFIDENȚIALITATE (NDA)
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

DIVULGATORUL: ${data.divulgator_nume}
CUI/CNP: ${data.divulgator_cui}

DESTINATARUL: ${data.destinatar_nume}
CUI/CNP: ${data.destinatar_cui}

II. DEFINIȚII

"Informații Confidențiale" înseamnă orice informații tehnice, comerciale, financiare sau de altă natură referitoare la:
${data.obiect_confidential}

III. SCOPUL DIVULGĂRII

Informațiile confidențiale sunt divulgate exclusiv în scopul:
${data.scop}

IV. OBLIGAȚII

Destinatarul se obligă:
a) Să păstreze strictă confidențialitate asupra informațiilor primite;
b) Să nu le dezvăluie terților fără acordul scris al Divulgatorului;
c) Să le folosească exclusiv în scopul menționat;
d) Să returneze sau distrugă documentele la cerere.

V. DURATA

Obligația de confidențialitate se menține timp de ${data.durata_confidentialitate} de la semnarea prezentului acord.

VI. PENALITĂȚI

${data.clauza_penalitate ? `Nerespectarea obligațiilor atrage plata de daune de ${data.clauza_penalitate} RON.` : 'Nerespectarea obligațiilor atrage răspunderea civilă conform legii.'}

VII. DISPOZIȚII FINALE

Prezentul acord a fost încheiat în 2 exemplare originale.

DIVULGATORUL                                 DESTINATARUL

${data.divulgator_nume}                      ${data.destinatar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-colaborare') {
    return `CONTRACT DE COLABORARE
Nr. ${contractNumber} / ${today}

I. PĂRȚILE CONTRACTANTE

PARTEA I: ${data.parte1_nume}
CUI/CNP: ${data.parte1_cui}
Adresa: ${data.parte1_adresa}

PARTEA II: ${data.parte2_nume}
CUI/CNP: ${data.parte2_cui}
Adresa: ${data.parte2_adresa}

II. OBIECTUL COLABORĂRII

Părțile convin să colaboreze în vederea:
${data.obiect}

III. DURATA CONTRACTULUI

Prezentul contract se încheie pe o perioadă de: ${data.durata}
Data de intrare în vigoare: ${today}

IV. DISTRIBUȚIA VENITURILOR

Veniturile rezultate din colaborare se vor distribui astfel:
${data.distributie_venituri}

V. OBLIGAȚIILE PĂRȚILOR

Fiecare parte se obligă:
a) Să contribuie cu resursele convenite;
b) Să respecte termenele și obiectivele stabilite;
c) Să informeze cealaltă parte despre orice modificare relevantă;
d) Să păstreze confidențialitatea informațiilor partenerului.

VI. RĂSPUNDEREA CONTRACTUALĂ

Neîndeplinirea obligațiilor asumate atrage răspunderea civilă a părții vinovate.

VII. ÎNCETAREA CONTRACTULUI

Contractul poate înceta prin: acordul ambelor părți, expirarea termenului, sau notificare scrisă cu 30 zile preaviz.

VIII. LITIGII

Litigiile se soluționează pe cale amiabilă sau prin instanțele judecătorești competente.

IX. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

PARTEA I                                     PARTEA II

${data.parte1_nume}                          ${data.parte2_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-agent-imobiliar') {
    return `CONTRACT DE INTERMEDIERE IMOBILIARĂ
Nr. ${contractNumber} / ${today}

I. PĂRȚILE CONTRACTANTE

AGENȚIA: ${data.agentie_nume}
CUI: ${data.agentie_cui}
Agent responsabil: ${data.agent_nume}

CLIENT: ${data.client_nume}
CNP: ${data.client_cnp}
Adresa: ${data.client_adresa}
Telefon: ${data.client_telefon}

II. OBIECTUL CONTRACTULUI

Agenția se obligă să intermedieze o tranzacție de ${data.tip_tranzactie} pentru:
${data.descriere_proprietate}

${data.pret_estimat ? `Prețul estimat: ${data.pret_estimat} EUR` : ''}

III. COMISIONUL AGENȚIEI

Clientul se obligă să achite agenției un comision de ${data.comision}% din valoarea tranzacției finalizate.
Comisionul devine exigibil la momentul semnării actelor de tranzacție.

IV. DURATA MANDATULUI

Prezentul contract este valabil pe o perioadă de ${data.durata_mandat} luni de la data semnării.

V. OBLIGAȚIILE AGENȚIEI

a) Să identifice și prezinte proprietăți corespunzătoare cerințelor clientului;
b) Să organizeze vizionările solicitate;
c) Să furnizeze informații corecte și complete despre proprietăți;
d) Să asiste clientul în procesul de negociere.

VI. OBLIGAȚIILE CLIENTULUI

a) Să furnizeze informații corecte despre necesitățile și posibilitățile financiare;
b) Să achite comisionul convenit la finalizarea tranzacției;
c) Să informeze agenția imediat despre orice tranzacție directă cu vânzători/cumpărători prezentați de agenție.

VII. EXCLUSIVITATE

${data.exclusivitate?.includes('Cu exclusivitate')
  ? `Prezentul contract conferă exclusivitate agenției pe durata mandatului. Clientul se obligă să colaboreze exclusiv cu această agenție și să nu încheie tranzacția prin intermediul altei agenții sau în mod direct cu persoane prezentate de agenție.
${data.comision_tranzactie_directa ? `În cazul tranzacționării directe cu persoane prezentate de agenție, clientul datorează un comision de ${data.comision_tranzactie_directa}% din valoarea tranzacției.` : ''}`
  : `Prezentul contract nu conferă exclusivitate agenției. Clientul are dreptul să colaboreze simultan cu mai multe agenții imobiliare. Comisionul este datorat exclusiv agenției care a intermediat efectiv tranzacția.`
}

VIII. LITIGII

Litigiile se soluționează pe cale amiabilă sau prin instanțele din raza domiciliului clientului.

IX. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare.

AGENȚIA                                      CLIENTUL

${data.agentie_nume}                         ${data.client_nume}
Agent: ${data.agent_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-agent-asigurari') {
    return `CONTRACT DE INTERMEDIERE ÎN ASIGURĂRI
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

BROKERUL/COMPANIA: ${data.broker_nume}
CUI: ${data.broker_cui}
Agent: ${data.agent_nume}

ASIGURATUL: ${data.client_nume}
CNP/CUI: ${data.client_cnp}

II. OBIECTUL CONTRACTULUI

Brokerul se obligă să intermedieze o polița de asigurare de tip: ${data.tip_asigurare}

III. PRIMA DE ASIGURARE

Prima de asigurare anuală: ${data.prima_asigurare} RON
Perioada asigurată: ${data.perioada}

IV. OBLIGAȚIILE BROKERULUI

a) Să prezinte oferte de asigurare corespunzătoare nevoilor clientului;
b) Să explice condițiile și excluderile poliței;
c) Să asiste clientul în caz de daună;
d) Să acționeze în interesul asiguratului.

V. OBLIGAȚIILE ASIGURATULUI

a) Să furnizeze informații corecte și complete;
b) Să achite prima de asigurare la termenele convenite;
c) Să notifice orice modificare a riscului asigurat.

VI. COMISIONUL

Brokerul percepe comision de la compania de asigurări, nu de la asigurat.

VII. LEGEA APLICABILĂ

Prezentul contract este supus legii române. Litigiile se soluționează de instanțele competente.

VIII. DISPOZIȚII FINALE

Prezentul contract a fost redactat în 2 exemplare.

BROKERUL                                     ASIGURATUL

${data.broker_nume}                          ${data.client_nume}
Agent: ${data.agent_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-vanzare-cumparare') {
    return `CONTRACT DE VÂNZARE-CUMPĂRARE
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

VÂNZĂTORUL: ${data.vanzator_nume}
CUI/CNP: ${data.vanzator_cui}

CUMPĂRĂTORUL: ${data.cumparator_nume}
CUI/CNP: ${data.cumparator_cui}

II. OBIECTUL CONTRACTULUI

Vânzătorul transmite cumpărătorului dreptul de proprietate asupra:
${data.descriere_bun}

III. PREȚUL

Prețul de vânzare convenit este de ${data.pret} RON.
Modalitatea de plată: ${data.modalitate_plata}

IV. PREDAREA BUNULUI

Predarea bunului se va efectua la data de ${data.data_predare}, la ${data.locul_predarii}.
La momentul predării, vânzătorul garantează că bunul este liber de sarcini și datorii.

V. GARANȚII

Vânzătorul garantează că:
a) Este proprietarul de drept al bunului;
b) Bunul nu este gajat, sechestrat sau ipotecat;
c) Nu există litigii privind bunul.

VI. RĂSPUNDEREA PENTRU VICII

Vânzătorul răspunde pentru viciile ascunse conform Codului Civil.

VII. LITIGII

Litigiile se rezolvă pe cale amiabilă sau de instanțele judecătorești competente.

VIII. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

VÂNZĂTORUL                                   CUMPĂRĂTORUL

${data.vanzator_nume}                        ${data.cumparator_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-inchiriere') {
    return `CONTRACT DE ÎNCHIRIERE
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

LOCATORUL (Proprietarul): ${data.locator_nume}
CUI/CNP: ${data.locator_cui}

LOCATARUL (Chiriașul): ${data.locatar_nume}
CUI/CNP: ${data.locatar_cui}

II. OBIECTUL CONTRACTULUI

Locatorul dă în chirie locatarului:
${data.descriere_spatiu}

Adresa/Locația: ${data.adresa}
${data.suprafata ? `Suprafața: ${data.suprafata} mp` : ''}

III. DURATA CONTRACTULUI

Contractul se încheie pe o perioadă de ${data.durata}, începând cu ${data.data_inceput}.

IV. CHIRIA

Chiria lunară este de ${data.chirie_lunara} RON, plătibilă până în ziua 5 a fiecărei luni.
${data.garantie ? `Garanție: ${data.garantie} luni de chirie, achitată la semnarea contractului.` : ''}

V. OBLIGAȚIILE LOCATORULUI

a) Să predea spațiul în stare corespunzătoare utilizării;
b) Să asigure liniștita folosință pe durata contractului;
c) Să efectueze reparațiile majore necesare.

VI. OBLIGAȚIILE LOCATARULUI

a) Să plătească chiria la termenele stabilite;
b) Să folosească spațiul conform destinației convenite;
c) Să nu subînchirieze fără acordul scris al locatorului;
d) Să predea spațiul în starea în care l-a primit.

VII. INDEXAREA CHIRIEI

${data.indexare_chirie === 'Fără indexare' ? 'Chiria rămâne fixă pe durata contractului, fără indexare.' : data.indexare_chirie === 'Indexare anuală la inflație (IPC)' ? 'Chiria se indexează anual cu indicele prețurilor de consum (IPC) comunicat de INS.' : 'Chiria poate fi indexată la acordul ambelor părți, prin act adițional semnat.'}

${data.garantie_inventar === 'Da, se atașează inventar semnat' ? 'VIII. INVENTAR\n\nSe atașează prezentului contract un inventar al bunurilor mobile existente în spațiu, semnat de ambele părți. Chiriașul preia spațiul cu bunurile menționate și le va restitui în aceeași stare (uzura normală exclusă).\n\nIX.' : 'VIII.'}REPARAȚII

${data.reparatii_minore_pana_la ? `Reparațiile minore (până la ${data.reparatii_minore_pana_la} RON/intervenție) sunt în sarcina chiriașului. Reparațiile majore rămân în sarcina locatorului.` : 'Reparațiile minore de întreținere curentă sunt în sarcina chiriașului. Reparațiile majore rămân în sarcina locatorului.'}

${data.garantie_inventar === 'Da, se atașează inventar semnat' ? 'X.' : 'IX.'}REZILIEREA CONTRACTULUI

Contractul poate fi reziliat cu ${data.reziliere_preaviz_zile || '30'} zile preaviz scris. Neachitarea chiriei pe 2 luni consecutive dă dreptul locatorului la reziliere imediată.

${data.titlu_executoriu?.startsWith('Da') ? `${data.garantie_inventar === 'Da, se atașează inventar semnat' ? 'XI.' : 'X.'}TITLU EXECUTORIU\n\nPrezentul contract, autentificat notarial, constituie titlu executoriu în privința obligației de plată a chiriei și a obligației de restituire a spațiului la expirarea/rezilierea contractului, conform art. 1798 Cod Civil.` : ''}

LITIGII

Litigiile se soluționează de instanțele competente de la locul situării imobilului.

DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

LOCATORUL                                    LOCATARUL

${data.locator_nume}                         ${data.locatar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-consultanta') {
    return `CONTRACT DE CONSULTANȚĂ
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

CONSULTANTUL: ${data.consultant_nume}
CUI/CNP: ${data.consultant_cui}

CLIENTUL: ${data.client_nume}
CUI/CNP: ${data.client_cui}

II. OBIECTUL CONTRACTULUI

Consultantul prestează servicii de consultanță în domeniul: ${data.domeniu}

Descrierea serviciilor:
${data.descriere_servicii}

III. TARIFUL DE CONSULTANȚĂ

Tariful convenit: ${data.tarif} ${data.tip_tarif}
Durata contractului: ${data.durata}

IV. MODALITATEA DE PLATĂ

Plata se efectuează lunar, pe baza raportului de activitate transmis de consultant, în termen de 15 zile de la emiterea facturii.

V. OBLIGAȚIILE CONSULTANTULUI

a) Să furnizeze servicii de calitate, cu diligența unui profesionist;
b) Să respecte confidențialitatea informațiilor clientului;
c) Să raporteze lunar activitățile desfășurate;
d) Să informeze clientul despre orice conflict de interese.

VI. OBLIGAȚIILE CLIENTULUI

a) Să achite tarifele la termenele convenite;
b) Să furnizeze informațiile necesare desfășurării activității;
c) Să colaboreze activ pentru atingerea obiectivelor.

VII. CLAUZA DE CONFIDENȚIALITATE

Consultantul se obligă să păstreze confidențialitatea tuturor informațiilor la care are acces, pe durata contractului și 2 ani după încetarea acestuia.

VIII. PROPRIETATEA INTELECTUALĂ

Lucrările și documentele elaborate de consultant în cadrul acestui contract sunt proprietatea clientului, dacă nu se prevede altfel.

IX. LITIGII

Litigiile se soluționează pe cale amiabilă sau de instanțele judecătorești competente.

X. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

CONSULTANTUL                                 CLIENTUL

${data.consultant_nume}                      ${data.client_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }


  if (contract.id === 'acord-gdpr') {
    return `ACORD DE PRELUCRARE A DATELOR CU CARACTER PERSONAL
Nr. ${contractNumber} / ${today}
(în conformitate cu Regulamentul UE 2016/679 — GDPR)

I. OPERATORUL DE DATE

Denumire: ${data.operator_nume}
CUI: ${data.operator_cui}
Adresa: ${data.operator_adresa}

II. PERSOANA VIZATĂ

${data.persoana_vizata}

III. SCOPUL PRELUCRĂRII

Operatorul prelucrează datele cu caracter personal în următoarele scopuri:
${data.scop_prelucrare}

IV. CATEGORIILE DE DATE PRELUCRATE

${data.categorii_date}

V. TEMEIUL LEGAL

Prelucrarea se realizează în baza: art. 6 alin. (1) lit. b) GDPR (executarea unui contract) și/sau art. 6 alin. (1) lit. a) GDPR (consimțământul persoanei vizate).

VI. DURATA RETENȚIEI

Datele vor fi păstrate timp de: ${data.durata_retentie}

VII. DREPTURILE PERSOANEI VIZATE

Persoana vizată are dreptul la: acces, rectificare, ștergere, restricționarea prelucrării, portabilitate, opoziție și de a nu face obiectul unei decizii automate. Poate exercita aceste drepturi la: ${data.operator_adresa}

Poate depune plângere la ANSPDCP (www.dataprotection.ro).

VIII. TRANSMITEREA DATELOR CĂTRE TERȚI

Datele nu vor fi transmise către terți fără consimțământul explicit al persoanei vizate, cu excepția obligațiilor legale.

IX. SEMNĂTURĂ

OPERATORUL                                   PERSOANA VIZATĂ

${data.operator_nume}                        ${data.persoana_vizata}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-telemunca') {
    return `ACT ADIȚIONAL NR. ${contractNumber}
LA CONTRACTUL INDIVIDUAL DE MUNCĂ
privind desfășurarea activității în regim de TELEMUNCĂ
Încheiat la data de: ${today}

În conformitate cu Legea nr. 81/2018 privind reglementarea activității de telemuncă

I. ANGAJATORUL

${data.angajator_nume}
CUI: ${data.angajator_cui}

II. ANGAJATUL

Nume: ${data.angajat_nume}
CNP: ${data.angajat_cnp}
Funcția: ${data.functia}

III. LOCUL DESFĂȘURĂRII ACTIVITĂȚII ÎN REGIM DE TELEMUNCĂ

${data.locatie_telemunca}

IV. PROGRAMUL DE LUCRU

${data.program_lucru}
Zile telemuncă: ${data.zile_telemunca}

V. OBLIGAȚIILE ANGAJATORULUI (art. 7 Legea 81/2018)

a) Să asigure mijloacele tehnice necesare desfășurării activității;
b) Să instruiască angajatul privind securitatea și sănătatea în muncă;
c) Să respecte dreptul la viața privată a angajatului la domiciliu;
d) Să asigure confidențialitatea datelor procesate de angajat.

VI. OBLIGAȚIILE ANGAJATULUI

a) Să respecte programul de lucru convenit;
b) Să asigure confidențialitatea informațiilor de serviciu;
c) Să utilizeze echipamentele conform procedurilor interne;
d) Să fie disponibil pe canalele de comunicare convenite.

${data.echipamente ? `VII. ECHIPAMENTE

Angajatorul pune la dispoziție:
${data.echipamente}` : ''}

VIII. DATA INTRĂRII ÎN VIGOARE

Prezentul act adițional intră în vigoare la data de: ${data.data_incepere}

ANGAJATOR                                    ANGAJAT

${data.angajator_nume}                       ${data.angajat_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'antecontract-vanzare') {
    return `ANTECONTRACT DE VÂNZARE-CUMPĂRARE
Nr. ${contractNumber} / ${today}

I. PROMITENTUL-VÂNZĂTOR

${data.promitent_vanzator}
CNP/CUI: ${data.vanzator_cnp}

II. PROMITENTUL-CUMPĂRĂTOR

${data.promitent_cumparator}
CNP/CUI: ${data.cumparator_cnp}

III. OBIECTUL ANTECONTRACTULUI

Promitentul-vânzător se obligă să vândă, iar Promitentul-cumpărător se obligă să cumpere:
${data.descriere_bun}

IV. PREȚUL ȘI CONDIȚIILE DE PLATĂ

Prețul total convenit: ${data.pret_vanzare} EUR
Avans achitat la semnarea antecontractului: ${data.avans} EUR
Rest de plată la perfectarea vânzării: ${parseInt(data.pret_vanzare || '0') - parseInt(data.avans || '0')} EUR

V. TERMENUL DE PERFECTARE

Vânzarea-cumpărarea definitivă se va perfecta în formă autentică (la notar) până la data de: ${data.termen_perfectare}

VI. CLAUZA PENALIZATOARE

${data.penalitate === 'Da, se aplică (standard)' 
  ? 'Dacă Promitentul-vânzător refuză perfectarea vânzării, va returna dublu avansul primit. Dacă Promitentul-cumpărător refuză, va pierde avansul achitat.'
  : 'Părțile au convenit că nu se aplică penalități pentru nerespectarea promisiunii, avansul urmând a fi returnat integral.'}

VII. CHELTUIELI DE PERFECTARE

Cheltuielile notariale și taxele aferente perfectării vânzării vor fi suportate de Promitentul-cumpărător, dacă nu se va conveni altfel.

VIII. DISPOZIȚII FINALE

Prezentul antecontract este guvernat de Codul Civil român. Litigiile se soluționează de instanțele competente.

PROMITENT-VÂNZĂTOR                           PROMITENT-CUMPĂRĂTOR

${data.promitent_vanzator}                   ${data.promitent_cumparator}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'cesiune-drepturi-autor') {
    return `CONTRACT DE CESIUNE A DREPTURILOR PATRIMONIALE DE AUTOR
Nr. ${contractNumber} / ${today}

În conformitate cu Legea nr. 8/1996 privind dreptul de autor și drepturile conexe

I. CEDENTUL

Nume: ${data.cedent_nume}
CNP/CUI: ${data.cedent_cnp}

II. CESIONARUL

Denumire: ${data.cesionar_nume}
CUI: ${data.cesionar_cui}

III. OBIECTUL CESIUNII

Cedentul cedează Cesionarului drepturile patrimoniale de autor asupra:
${data.descriere_opera}

IV. TIPUL CESIUNII

Cesiunea este: ${data.tip_cesiune}

V. TERITORIUL

Cesiunea acoperă: ${data.teritoriu_cesiune || data.teritoriu}

VI. DURATA

Cesiunea este acordată pentru: ${data.durata_cesiune || data.durata}

VII. PREȚUL CESIUNII

Prețul convenit pentru cesiunea drepturilor: ${data.pret_cesiune} RON

Plata se efectuează la semnarea prezentului contract/în termen de 30 zile de la predarea operei.

VIII. DREPTURILE MORALE ȘI ATRIBUIRE

Cedentul își rezervă drepturile morale de autor (dreptul la paternitate și integritate), în conformitate cu art. 10 din Legea 8/1996.
Atribuire publică autor: ${data.atribuire_autor || 'Da, autorul este menționat public'}

IX. DREPTUL DE MODIFICARE

${data.drept_modificare || 'Da, poate modifica/adapta opera'}. Orice modificare substanțială care afectează integritatea operei va respecta dreptul moral al autorului.

X. OPERE VIITOARE

${data.opere_viitoare || 'Nu (doar opera specificată)'}.

XI. GARANȚII

Cedentul garantează că este unicul autor al operei, că opera nu încalcă drepturile terților și că nu a mai cedat aceleași drepturi unor terți.

XII. LITIGII

Litigiile se soluționează pe cale amiabilă sau de instanțele judecătorești competente.

XIII. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

CEDENTUL                                     CESIONARUL

${data.cedent_nume}                          ${data.cesionar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-mandat') {
    return `CONTRACT DE MANDAT
Nr. ${contractNumber} / ${today}

Încheiat între:

MANDANT: ${data.mandant_nume}, CUI/CNP: ${data.mandant_cui}, cu sediul/domiciliul în ${data.mandant_adresa}, reprezentat prin ${data.mandant_reprezentant || data.mandant_nume},

și

MANDATAR: ${data.mandatar_nume}, CUI/CNP: ${data.mandatar_cui}, cu sediul/domiciliul în ${data.mandatar_adresa},

1. OBIECTUL MANDATULUI
Mandantul împuternicește Mandatarul să îl reprezinte și să acționeze în numele său pentru: ${data.obiect_mandat}.

2. PUTERILE ACORDATE
Mandatarul este autorizat să: ${data.puteri_acordate}.

3. DURATA
Prezentul mandat este valabil de la ${data.data_start} până la ${data.data_sfarsit}.

4. REMUNERAȚIE
${data.remuneratie ? `Mandatarul va primi o remunerație de ${data.remuneratie} RON pentru îndeplinirea mandatului.` : 'Prezentul mandat este cu titlu gratuit.'}

5. OBLIGAȚIILE MANDATARULUI
- Să execute mandatul conform instrucțiunilor primite
- Să informeze mandantul despre progresul acțiunilor
- Să dea socoteală de gestiunea sa la finalul mandatului
- Să nu depășească limitele împuternicirii primite

6. REVOCAREA MANDATULUI
Mandantul poate revoca oricând prezentul mandat prin notificare scrisă.

7. LITIGII
Eventualele litigii vor fi soluționate pe cale amiabilă sau, în caz de eșec, de instanțele judecătorești competente.

MANDANT                                      MANDATAR

${data.mandant_nume}                         ${data.mandatar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-subcontractare') {
    return `CONTRACT DE SUBCONTRACTARE
Nr. ${contractNumber} / ${today}

Încheiat între:

CONTRACTOR PRINCIPAL: ${data.contractor_nume}, CUI: ${data.contractor_cui}, cu sediul în ${data.contractor_adresa},

și

SUBCONTRACTOR: ${data.subcontractor_nume}, CUI/CNP: ${data.subcontractor_cui}, cu sediul/domiciliul în ${data.subcontractor_adresa},

1. CONTEXT
Contractorul Principal a încheiat un contract cu beneficiarul final pentru execuția unor lucrări/servicii și dorește să subcontracteze o parte din acestea.

2. OBIECTUL SUBCONTRACTULUI
Subcontractorul va executa următoarele servicii/lucrări: ${data.descriere_servicii}.

3. VALOARE ȘI PLATĂ
Contravaloarea serviciilor subcontractate este de ${data.valoare} ${data.moneda || 'RON'}, plătibilă în ${data.termene_plata || '30 de zile de la recepția lucrărilor'}.

4. TERMEN DE EXECUȚIE
- Data de început: ${data.data_start}
- Data de finalizare: ${data.data_sfarsit}

5. CALITATE ȘI RECEPȚIE
Subcontractorul garantează că serviciile vor fi prestate la standardele de calitate convenite. Recepția se va face în termen de 5 zile lucrătoare de la livrare.

6. CONFIDENȚIALITATE
Subcontractorul se obligă să păstreze confidențialitatea tuturor informațiilor primite în legătură cu proiectul și cu beneficiarul final.

7. PROPRIETATE INTELECTUALĂ
Toate drepturile de proprietate intelectuală rezultate din prezentul subcontract aparțin Contractorului Principal.

8. RĂSPUNDERE
Subcontractorul răspunde față de Contractorul Principal pentru orice prejudiciu cauzat prin neîndeplinirea sau îndeplinirea defectuoasă a obligațiilor.

CONTRACTOR PRINCIPAL                         SUBCONTRACTOR

${data.contractor_nume}                      ${data.subcontractor_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'acord-parteneriat') {
    return `ACORD DE PARTENERIAT
Nr. ${contractNumber} / ${today}

Încheiat între:

PARTENER 1: ${data.partener1_nume}, CUI/CNP: ${data.partener1_cui}, cu sediul/domiciliul în ${data.partener1_adresa},

și

PARTENER 2: ${data.partener2_nume}, CUI/CNP: ${data.partener2_cui}, cu sediul/domiciliul în ${data.partener2_adresa},

1. SCOPUL PARTENERIATULUI
Părțile convin să colaboreze pentru: ${data.scop_parteneriat}.

2. CONTRIBUȚII
- Partener 1: ${data.contributie_p1}
- Partener 2: ${data.contributie_p2}

3. ÎMPĂRȚIREA VENITURILOR/PROFITURILOR
${data.distribuire_profit || data.impartire_venituri || '50% Partener 1 / 50% Partener 2'}.

4. LUAREA DECIZIILOR
Deciziile importante se iau cu acordul ambilor parteneri. Deciziile operaționale curente pot fi luate individual în limita competențelor agreate.
${data.deadlock_rezolvare ? `\nÎn caz de blocaj decizional (deadlock): ${data.deadlock_rezolvare}.` : ''}

5. DURATA
Prezentul acord este valabil de la ${data.data_start} până la ${data.data_sfarsit || 'data convenită de comun acord pentru finalizarea proiectului'}.

6. CONFIDENȚIALITATE
Ambii parteneri se obligă să păstreze confidențialitatea informațiilor schimbate în cadrul acestui parteneriat.

7. CLAUZA DE NON-COMPETE
${data.non_compete_durata === 'Fără non-compete' || !data.non_compete_durata ? 'Părțile nu au convenit o clauză de non-compete.' : `Pe o perioadă de ${data.non_compete_durata} de la încetarea prezentului acord, niciuna dintre părți nu va desfășura activități concurente directe în același domeniu și pe aceeași piață.`}

8. MECANISMUL DE IEȘIRE DIN PARTENERIAT
${data.mecanism_exit || 'Partenerul care dorește să se retragă va notifica cu 30 de zile preaviz. Drepturile și obligațiile vor fi evaluate și negociate la valoarea de piață de un evaluator agreat de ambele părți. Dacă nu se ajunge la un acord, se va recurge la medierea unui terț neutral.'}

9. ÎNCETAREA ACORDULUI
Acordul poate înceta prin:
- Acordul scris al ambelor părți
- Finalizarea proiectului/scopului parteneriatului
- Notificare cu 30 de zile preaviz

10. LITIGII
Eventualele dispute vor fi rezolvate pe cale amiabilă. În caz de eșec, competența revine instanțelor judecătorești.

PARTENER 1                                   PARTENER 2

${data.partener1_nume}                       ${data.partener2_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-servicii-it') {
    return `CONTRACT DE SERVICII IT
Nr. ${contractNumber} / ${today}

Încheiat între:

PRESTATOR: ${data.prestator_nume}, CUI/CNP: ${data.prestator_cui}, cu sediul/domiciliul în ${data.prestator_adresa}, denumit în continuare "Prestatorul",

și

BENEFICIAR: ${data.beneficiar_nume}, CUI/CNP: ${data.beneficiar_cui || '-'}, cu sediul/domiciliul în ${data.beneficiar_adresa || '-'}, denumit în continuare "Beneficiarul",

1. OBIECTUL CONTRACTULUI
Prestatorul se obligă să furnizeze următoarele servicii IT: ${data.descriere_servicii}.

Deliverabilele includ: ${data.deliverabile || 'documentate și convenite separat în specificații tehnice'}.

2. VALOARE ȘI MODALITATE DE PLATĂ
- Valoare totală: ${data.valoare} ${data.moneda || 'EUR'}
- Avans (dacă există): ${data.avans || '0'}%
- Plata finală: la livrarea și acceptarea proiectului
- Modalitate: transfer bancar în contul Prestatorului

3. TERMENE
- Data de debut: ${data.data_start}
- Data de livrare estimată: ${data.data_sfarsit}
- Eventualele întârzieri cauzate de Beneficiar (feedback tardiv, specificații incomplete) nu sunt imputabile Prestatorului.

4. ACCEPTANȚA LIVRABILELOR
Beneficiarul dispune de ${data.zile_acceptanta || '5'} zile lucrătoare pentru a testa și accepta livrabilele. Lipsa unui răspuns în acest termen constituie acceptanță tacită.

5. MODIFICĂRI DE SCOP
Orice modificare față de specificațiile inițiale se negociază separat și poate genera costuri adiționale. Prestatorul va transmite o ofertă de preț pentru modificări înainte de execuție.

6. PROPRIETATE INTELECTUALĂ
La plata integrală, drepturile de autor și proprietatea intelectuală asupra livrabilelor se transferă Beneficiarului, cu excepția componentelor open-source sau licențiate terț.

7. CONFIDENȚIALITATE
Prestatorul se obligă să păstreze confidențialitatea tuturor informațiilor primite de la Beneficiar pe durata și după finalizarea contractului (${data.durata_confidentialitate || '3 ani'}).

8. GARANȚIE
Prestatorul acordă o perioadă de garanție de ${data.garantie || '30 de zile'} pentru remedierea defectelor apărute din vina sa.

9. RĂSPUNDERE LIMITATĂ
Răspunderea Prestatorului nu poate depăși valoarea contractului. Prestatorul nu răspunde pentru prejudicii indirecte sau pierderi de profit.

10. REZILIERE
Contractul poate fi reziliat:
- De Beneficiar: cu 15 zile preaviz, cu plata serviciilor prestate până la acea dată
- De Prestator: în caz de neplată după 30 de zile de la scadență

11. FORȚĂ MAJORĂ
Niciuna din părți nu răspunde pentru neexecutarea obligațiilor cauzată de evenimente de forță majoră.

12. LEGISLAȚIE APLICABILĂ
Prezentul contract este guvernat de legislația română în vigoare.

PRESTATOR                                    BENEFICIAR

${data.prestator_nume}                       ${data.beneficiar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-mentenanta-it') {
    return `CONTRACT DE MENTENANȚĂ IT
Nr. ${contractNumber} / ${today}

I. PĂRȚILE CONTRACTANTE

PRESTATOR: ${data.prestator_nume}
CUI/CNP: ${data.prestator_cui}
Adresa: ${data.prestator_adresa}

CLIENT: ${data.client_nume}
CUI/CNP: ${data.client_cui}
Adresa: ${data.client_adresa}

II. OBIECTUL CONTRACTULUI

Prestatorul se obligă să asigure mentenanța lunară pentru:
${data.sisteme_mentinute}

Servicii incluse:
${data.servicii_incluse}

III. NIVELUL DE SERVICIU (SLA)

Timp de răspuns garantat: ${data.timp_raspuns}
${data.sla_raspuns_ore ? `Timp de răspuns incident critic: ${data.sla_raspuns_ore} ore` : ''}
${data.sla_rezolvare_ore ? `Timp de rezolvare incident critic: ${data.sla_rezolvare_ore} ore` : ''}
${data.ore_incluse ? `Ore de intervenție incluse lunar: ${data.ore_incluse} ore` : ''}
${data.tarif_extra ? `Tarif ore suplimentare: ${data.tarif_extra} RON/oră` : ''}
${data.backup_frecventa ? `Frecvența backup: ${data.backup_frecventa}` : ''}
${data.proprietate_cod ? `Proprietatea codului sursă: ${data.proprietate_cod}` : ''}

IV. TARIFUL LUNAR

Tariful lunar de mentenanță: ${data.tarif_lunar} RON + TVA (dacă este cazul)
Plata se efectuează până în ziua 10 a fiecărei luni.

V. DURATA CONTRACTULUI

Data de intrare în vigoare: ${data.data_start}
Durata: ${data.durata}

Contractul se reînnoiește automat dacă niciuna din părți nu notifică rezilierea cu 30 de zile înainte de expirare.

VI. OBLIGAȚIILE PRESTATORULUI

a) Să monitorizeze sistemele convenite și să intervină în termenele SLA;
b) Să efectueze backup-uri regulate și actualizări de securitate;
c) Să raporteze lunar activitățile desfășurate;
d) Să informeze clientul imediat în caz de incident major;
e) Să păstreze confidențialitatea datelor și credențialelor clientului.

VII. OBLIGAȚIILE CLIENTULUI

a) Să achite tariful lunar la termenele stabilite;
b) Să furnizeze accesul necesar (FTP, SSH, admin panel, etc.);
c) Să informeze prestatorul despre modificări planificate la sisteme;
d) Să nu facă modificări majore fără acordul prestatorului.

VIII. RĂSPUNDERE

Prestatorul nu răspunde pentru pierderi de date cauzate de acțiunile clientului, atacuri cibernetice sofisticate sau defecțiuni hardware. Răspunderea maximă a Prestatorului nu poate depăși valoarea a 3 luni de contract.

IX. REZILIEREA CONTRACTULUI

Oricare parte poate rezilia contractul cu 30 de zile preaviz scris. Clientul va achita serviciile prestate până la data rezilierii.

X. LITIGII

Litigiile se soluționează pe cale amiabilă sau de instanțele judecătorești competente.

PRESTATOR                                    CLIENT

${data.prestator_nume}                       ${data.client_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-evenimente') {
    return `CONTRACT DE ORGANIZARE EVENIMENT
Nr. ${contractNumber} / ${today}

I. ORGANIZATORUL

${data.organizator_nume}
CUI: ${data.organizator_cui}
Adresa: ${data.organizator_adresa}

II. CLIENTUL (Beneficiarul)

Nume: ${data.client_nume}
CNP/CUI: ${data.client_cnp}
Telefon: ${data.client_telefon}

III. DETALIILE EVENIMENTULUI

Tip eveniment: ${data.tip_eveniment}
Data: ${data.data_eveniment}
Ora de începere: ${data.ora_inceput}
Durata: ${data.durata_ore} ore
Locație: ${data.locatie}
Număr participanți: ${data.nr_persoane} persoane

IV. DESCRIEREA SERVICIILOR

${data.descriere_eveniment}

V. PREȚUL ȘI MODALITATEA DE PLATĂ

Prețul total: ${data.pret_total} RON
Avans la rezervare: ${data.avans} RON (se achită la semnarea contractului)
Rest de plată: ${parseInt(data.pret_total || '0') - parseInt(data.avans || '0')} RON — plătibil: ${data.termen_plata_rest}

Avansul NU se restituie în caz de anulare cu mai puțin de 7 zile înainte de eveniment.

VI. POLITICA DE ANULARE

- Anulare cu > 14 zile: rambursare integrală a avansului
- Anulare cu 7-14 zile: rambursare 50% din avans
- Anulare cu < 7 zile: avansul se reține integral
- Anulare cauzată de Organizator: rambursare dublă a avansului

VII. OBLIGAȚIILE ORGANIZATORULUI

a) Să pună la dispoziție spațiul și serviciile conform descrierii;
b) Să asigure curățenia și pregătirea locației cu minim 1 oră înainte;
c) Să respecte programul stabilit;
d) Să informeze clientul imediat în caz de situații neprevăzute.

VIII. OBLIGAȚIILE CLIENTULUI

a) Să achite avansul la semnarea contractului;
b) Să achite restul la termenul convenit;
c) Să respecte regulamentul locației;
d) Să răspundă pentru daunele cauzate de participanți.

IX. FORȚA MAJORĂ

În caz de forță majoră (calamități, pandemie declarată oficial, etc.), evenimentul se reprogramează fără penalități.

X. LITIGII

Litigiile se soluționează amiabil sau de instanțele competente.

ORGANIZATOR                                  CLIENT

${data.organizator_nume}                     ${data.client_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-fotograf') {
    return `CONTRACT DE SERVICII FOTO/VIDEO
Nr. ${contractNumber} / ${today}

I. FOTOGRAFUL/VIDEOGRAFUL

${data.fotograf_nume}
CUI/CNP: ${data.fotograf_cui}
Adresa: ${data.fotograf_adresa}

II. CLIENTUL

Nume: ${data.client_nume}
CNP/CUI: ${data.client_cnp}
Telefon: ${data.client_telefon}

III. DETALIILE SESIUNII

Tip sesiune: ${data.tip_sesiune}
Data: ${data.data_sesiune}
Ora de start: ${data.ora_inceput}
Durata: ${data.durata_ore} ore
Locația: ${data.locatie}

IV. SERVICII INCLUSE

${data.servicii_incluse}

${data.nr_foto_livrate ? `Număr minim fotografii livrate: ${data.nr_foto_livrate} fotografii editate` : ''}
Termen de livrare: ${data.termen_livrare_zile} zile de la data sesiunii
Format de livrare: ${data.format_livrare}

V. PREȚUL ȘI PLATA

Prețul total: ${data.pret} RON
Avans la semnare: ${data.avans} RON (nererambursabil în caz de anulare cu mai puțin de 48 ore)
Rest: ${parseInt(data.pret || '0') - parseInt(data.avans || '0')} RON — plătibil la/înainte de sesiune

VI. PROPRIETATEA INTELECTUALĂ ȘI DREPTURI DE PUBLICARE

Clientul primește dreptul de utilizare personală și comercială a fotografiilor livrate.
Fotograful poate utiliza imaginile în scop de portofoliu: ${data.drepturi_publicare}

Fotograful păstrează fișierele RAW originale, care nu sunt incluse în livrabile (dacă nu s-a convenit altfel).

VII. POLITICA DE ANULARE / REPROGRAMARE

- Reprogramare (cu > 7 zile preaviz): o singură reprogramare gratuită
- Anulare cu < 48 ore: avansul se reține
- Anulare din cauza fotografului: rambursare dublă a avansului

VIII. CONDIȚII METEOROLOGICE

Pentru sesiunile în exterior, în caz de condiții meteo nefavorabile, sesiunea se reprogramează de comun acord, fără penalități.

IX. LIVRABILE FINALE

Fotograful livrează imagini editate profesional conform stilului agreat. Nu se livrează fotografii nereușite tehnic sau nepotrivite estetic. Numărul menționat reprezintă minimul garantat.

X. LITIGII

Litigiile se soluționează pe cale amiabilă sau de instanțele judecătorești competente.

FOTOGRAF                                     CLIENT

${data.fotograf_nume}                        ${data.client_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-traducator') {
    return `CONTRACT DE SERVICII DE TRADUCERE
Nr. ${contractNumber} / ${today}

I. PRESTATORUL DE SERVICII DE TRADUCERE

${data.traducator_nume}
CUI/CNP: ${data.traducator_cui}
Adresa: ${data.traducator_adresa}

II. CLIENTUL

${data.client_nume}
CUI/CNP: ${data.client_cui}
Adresa: ${data.client_adresa}

III. OBIECTUL CONTRACTULUI

Tipul serviciului: ${data.tip_serviciu}
Limba sursă: ${data.limba_sursa}
Limba țintă: ${data.limba_tinta}

Descrierea materialului de tradus:
${data.descriere_document}

${data.nr_pagini_cuvinte ? `Volum estimat: ${data.nr_pagini_cuvinte}` : ''}

IV. TERMENUL DE LIVRARE

Data de predare a traducerii finale: ${data.termen_livrare}
Format de livrare: ${data.format_livrare}

V. PREȚUL ȘI MODALITATEA DE PLATĂ

Prețul total al serviciilor: ${data.pret} RON
Modalitate de plată: ${data.modalitate_plata}

VI. OBLIGAȚIILE TRADUCĂTORULUI

a) Să realizeze traducerea fidelă și profesională a materialului primit;
b) Să respecte termenul de livrare convenit;
c) Să notifice clientul imediat dacă apar impedimente;
d) Să păstreze confidențialitatea conținutului tradus;
e) Să aplice ștampila de traducător autorizat, dacă este cazul.

VII. OBLIGAȚIILE CLIENTULUI

a) Să furnizeze toate materialele necesare la semnarea contractului;
b) Să achite prețul convenit conform modalității agreate;
c) Să furnizeze terminologia specifică domeniului, dacă există;
d) Să verifice traducerea în termen de 5 zile lucrătoare de la livrare.

VIII. REVIZII

Sunt incluse maximum 2 runde de revizii minore. Modificările substanțiale de conținut față de originalul inițial pot genera costuri suplimentare.

IX. CONFIDENȚIALITATE

Traducătorul se obligă să păstreze strictă confidențialitate asupra conținutului documentelor traduse pe o perioadă de 3 ani de la data contractului.

X. PROPRIETATEA INTELECTUALĂ

Traducerea realizată devine proprietatea clientului după achitarea integrală a prețului convenit.

XI. LITIGII

Litigiile se soluționează pe cale amiabilă sau de instanțele judecătorești competente din România.

XII. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

TRADUCĂTORUL                                 CLIENTUL

${data.traducator_nume}                      ${data.client_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  // Fallback
  return `${contract.name.toUpperCase()}
Nr. ${contractNumber} / ${today}

${Object.entries(data).map(([key, value]) => `${key.replace(/_/g, ' ').toUpperCase()}: ${value}`).join('\n')}

Prezentul contract a fost încheiat cu bună-credință, conform legislației române în vigoare.

Semnătura: _________________                 Data: ${today}`
}
