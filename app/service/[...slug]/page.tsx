import getServices from '@/app/_utils/getServices';
import ServicesDetails from '../../_components/Services/ServicesDetails';

export function generateStaticParams() {
    const services = getServices();

    return services.map(({ id, title }) => ({
        slug: ['' + id, title.toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-")]
    }));
}

export default function Page() {
    return <ServicesDetails />
}