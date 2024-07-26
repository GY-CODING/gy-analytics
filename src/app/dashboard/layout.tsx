import { Box, Typography } from "@mui/material";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-row justify-center items-center gap-4" >
                <Box sx={{ width: '18%', height: '95vh', backgroundColor: '#171717', borderRadius: '10px' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '2%', fontFamily: 'lexend', color: '#e5e5e5' }}>GY Analytics</Typography>
                </Box>
                {children}
            </body>
        </html>
    );
}