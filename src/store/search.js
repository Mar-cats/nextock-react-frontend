import { create } from 'zustand';

const useSearchStore = create((set) => ({
  searches: [],
  getRecentSearches: () => {
    const recentSearches = localStorage.getItem('recentSearches');
    set({ searches: recentSearches ? JSON.parse(recentSearches) : [] });
  },
  addSearch: (search) => {
    const searches = JSON.parse(localStorage.getItem('recentSearches'));
    if (searches && searches.includes(search)) return;
    const newSearches = searches ? [...searches, search] : [search];
    localStorage.setItem('recentSearches', JSON.stringify(newSearches));
    set({ searches: newSearches });
  },
  removeSearch: (search) => {
    const searches = JSON.parse(localStorage.getItem('recentSearches'));
    const newSearches = searches.filter((s) => s !== search);
    localStorage.setItem('recentSearches', JSON.stringify(newSearches));
    set({ searches: newSearches });
  },
  removeAllSearch: () => {
    localStorage.removeItem('recentSearches');
    set({ searches: [] });
  }
}));

const useSearchFocusStore = create((set) => ({
  isFocus: true,
  onFocus: () => {
    set({isFocus: true})
  },
  offFocus: () => {
    set({isFocus: false})
  }
}))

export { useSearchStore, useSearchFocusStore };
