// create icon function
const createIcon = (iconClass) => {
  //   creating icon
  const iElement = document.createElement('i');
  iElement.classList.add('fa-regular');
  iElement.classList.add(iconClass);
  return iElement;
};
export default createIcon;
