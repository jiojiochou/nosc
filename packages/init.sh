for i in components core hooks theme utils; do
  mkdir $i
  cd $i
  pnpm init
  cd ..
done