'use client';

import { DonateDialog } from '@/components/ui/extension/donate-dialog';

export function NavDonateButton({ lang }: { lang: string }) {
    return <DonateDialog type="normal" lang={lang} />;
}
