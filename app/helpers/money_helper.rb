def money(float)
	rounded_string = float.round(2).to_s
	rounded_string[-1] == "0" ? rounded_string + "0" : rounded_string
end