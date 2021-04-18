export const sumTwoSmallestNumbers = (number: number[]): number => {
  const negativ = number.find((numb) => numb < 0);
  // console.log(positiv);
  if (number.length < 4 || negativ < 0) {
    throw new Error();
  } else {
    const tabTri = number.sort(function (a, b) {
      return a - b;
    });
    return tabTri[0] + tabTri[1];
  }
};

sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

// Ceci est facultatif mais si vous exécutez vos tests avec     yarn bonus-test       vous avez maintenant 2 exigences supplémentaires:

// la fonction doit lancer s'il y a moins de 4 nombres.
// la fonction doit lancer s'il y a des nombres non positifs.
