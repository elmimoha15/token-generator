import random
import string

def generate_token(length: int = 16, use_upper: bool = True, use_lower: bool = True,
                   use_numbers: bool = True, use_symbols: bool = False) -> str:
    charset = ""
    if use_upper:
        charset += string.ascii_uppercase
    if use_lower:
        charset += string.ascii_lowercase
    if use_numbers:
        charset += string.digits
    if use_symbols:
        charset += "!@#$%^&*()_+"

    if not charset:
        return "No characters selected."

    return ''.join(random.choice(charset) for _ in range(length))
