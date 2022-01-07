import globalState from './globalState';

const useStore = globalState({
  archiveData: null,
  cancelActive: false,
  redoActive: false,
  thumbnailList: [],
  activeThumbnailIndex: 0,
});

export default useStore;
