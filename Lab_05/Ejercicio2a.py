from interpreter import draw
from chessPictures import knight

# Crea caballos 
knight_white = knight
knight_black = knight.negative()

# Unir caballos horizontal yverticalmente
top_row = knight_white.join(knight_black)
bottom_row = knight_black.join(knight_white)

# Unir las dos fils de caballo verticalmene
four_knights = top_row.up(bottom_row)

# Dibujar la image
draw(four_knights)
