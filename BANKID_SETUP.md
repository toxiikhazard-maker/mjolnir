# BankID-forberedd admin

Adminpanelen ar nu forberedd for BankID via en liten Node-server.

## Lokal test

1. Kopiera `.env.example` till `.env`.
2. Behall `BANKID_MOCK_ENABLED=true` for lokal test.
3. Kor `npm start`.
4. Oppna `http://localhost:3000/admin.html`.

I mocklage simuleras BankID och godkanns efter nagra sekunder. Mocklage far aldrig anvandas i produktion.

## Produktion

For riktig BankID-inloggning behovs avtal/certifikat eller en BankID-leverantor. Fyll sedan i:

- `SESSION_SECRET`
- `BANKID_AUTH_URL`
- `BANKID_COLLECT_URL`
- `BANKID_CANCEL_URL`
- `BANKID_ALLOWED_PERSONAL_NUMBERS`
- `BANKID_CLIENT_PFX_PATH` eller `BANKID_CLIENT_CERT_PATH` + `BANKID_CLIENT_KEY_PATH`

Adminpersonen maste finnas i `BANKID_ALLOWED_PERSONAL_NUMBERS`, annars nekas inloggningen aven om BankID-legitimeringen lyckas.

## Viktigt

Admin ska oppnas via servern, inte genom att dubbelklicka pa `admin.html`. Servern skyddar adminverktygets innehall och lamnar bara ut det efter godkand session.
